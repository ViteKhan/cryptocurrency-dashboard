import { FC } from 'react';
import { Grid } from '@mui/material';

import { AssetPlatforms } from './AssetPlatforms';
import { Categories } from './Categories';
import { Exchanges } from './Exchanges';
import { MarketIndexes } from './MarketIndexes';

export const Statistics: FC = () => {
  const statistics = [<Categories/>, <Exchanges/>, <AssetPlatforms/>, <MarketIndexes/>];
  return (
    <>
      {statistics.map((Component, idx) => (
        <Grid key={idx} item lg={3} sm={6} xl={3} xs={12}>
          {Component}
        </Grid>
      ))}
    </>
  );
};