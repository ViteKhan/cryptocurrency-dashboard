import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import { Statistics } from 'components/Statistics';
import { DashboardHeader } from './DashboardHeader';

export const Dashboard: FC = () => {

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <DashboardHeader/>
        <Statistics/>
      </Grid>
    </Container>
  );
};