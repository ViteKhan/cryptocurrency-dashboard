import { FC } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Loader } from 'components/Loader';
import { useGetPieChartOptions, useGetRepoStats } from './PieChart-hooks';

export const PieChart: FC = () => {
  const { data, isLoading } = useGetRepoStats();
  const options = useGetPieChartOptions(data || []);

  if (isLoading) return <Loader/>;

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};