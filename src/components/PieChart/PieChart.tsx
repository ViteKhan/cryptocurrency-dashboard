import { FC } from 'react';
import { Box, Skeleton } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useGetPieChartOptions, useGetRepoStats } from './PieChart-hooks';

export const PieChart: FC = () => {
  const { data, isLoading } = useGetRepoStats();
  const options = useGetPieChartOptions(data || []);

  if (isLoading) {
    return (
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Skeleton variant={'circular'} width={260} height={260} animation={'wave'}/>
      </Box>
    );
  }

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};