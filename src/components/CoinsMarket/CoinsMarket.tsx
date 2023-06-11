import { FC } from 'react';

import { CoinsTable } from './CoinsTable';
import { SearchFilter } from './SearchFilter';

export const CoinsMarket: FC = () => {

  return (
    <>
      <SearchFilter/>
      <CoinsTable/>
    </>
  );
};