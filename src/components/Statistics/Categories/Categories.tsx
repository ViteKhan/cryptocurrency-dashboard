import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'

import { Card } from '../../Card';
import { useGetCategories } from './Categories-hooks';

export const Categories: FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCategories();

  return (
    <Card
      text={'categories'}
      value={data?.length || 0}
      color={theme.palette.error.dark}
      icon={<CategoryOutlinedIcon sx={{ marginBottom: '4px' }}/>}
      isLoading={isLoading}
    />
  );
};