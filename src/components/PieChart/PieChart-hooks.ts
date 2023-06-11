import { useMemo } from 'react';
import Highcharts from 'highcharts';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from '@mui/material/styles';

import { getTotalSize } from './PieChart-utils';
import { useApi } from 'API';

export const useGetRepoStats = () => {
  const api = useApi();

  return useQuery(['repos'], api.github.getRepoStats);
};

export const useGetPieChartOptions = (languages: Record<string, number>) => {
  const theme = useTheme();
  const chartData = useMemo(() => {
    const totalSize = getTotalSize(languages);
    return Object.entries(languages).map(([language, size]) => ({ name: language, y: (size / totalSize) * 100 }));
  }, [languages]);

  return useMemo(() => {
    return {
      chart: {
        type: 'pie',
        backgroundColor: theme.palette.background.default,
      },
      title: {
        text: `Repository languages statistic`,
        style: { color: 'rgb(103, 119, 136)' },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: '{point.name}: {point.percentage:.1f} %',
          },
        },
      },
      tooltip: {
        formatter(this: Highcharts.Point): string {
          // @ts-ignore
          return `${this.key}: ${Highcharts.numberFormat(this.y ?? 0, 1)}%`;
        },
      },
      series: [
        {
          name: 'Languages',
          data: chartData,
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              plotOptions: {
                pie: {
                  dataLabels: {
                    enabled: false,
                  },
                },
              },
            },
          },
        ],
      },
    }
  }, [chartData, theme.palette.background.default]);
};