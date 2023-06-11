import { FC } from 'react';

import { CoinsTable } from './CoinsTable';
import { SearchFilter } from './SearchFilter';
import { useSearchFilter } from './CoinsMarket-hooks';

export const CoinsMarket: FC = () => {
  const { search, onChangeSearch } = useSearchFilter();

  return (
    <>
      <SearchFilter search={search} onChangeSearch={onChangeSearch}/>
      <CoinsTable searchTerm={search}/>
    </>
  );
};