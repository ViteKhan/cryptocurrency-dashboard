import { ChangeEvent, MouseEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useApi } from 'API';

export const useGetCoins = (page: number) => {
  const api = useApi();

  return useQuery({
    queryKey: ['coins-market', page],
    queryFn: () => api.coinGecko.coinsMarket.get(page),
  });
};

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState<number>(5);

  const onChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const onChangePerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPerPage(+event.target.value);
  };

  return { page, onChangePage, perPage, onChangePerPage };
};