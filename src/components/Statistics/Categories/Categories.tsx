import { FC } from 'react';
import { Card } from '../../Card';
import { useTheme } from '@mui/material/styles';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'

export const Categories: FC = () => {
  const theme = useTheme();
  return (
    <Card
      text={'categories'}
      value={10}
      color={theme.palette.error.dark}
      icon={<CategoryOutlinedIcon sx={{ marginBottom: '4px' }}/>}
    />
  );
};