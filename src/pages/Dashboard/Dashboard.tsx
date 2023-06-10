import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import { CoinsMarket } from 'components/CoinsMarket';
import { DashboardHeader } from './DashboardHeader';
import { Statistics } from 'components/Statistics';

export const Dashboard: FC = () => {

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <DashboardHeader/>
        <Statistics/>
        <Grid item xs={12}>
          <CoinsMarket />
        </Grid>
      </Grid>
    </Container>
  );
};