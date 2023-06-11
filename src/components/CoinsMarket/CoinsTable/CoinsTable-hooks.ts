import { ChangeEvent, MouseEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useApi } from 'API';

interface UseGetCoinsProps {
  page: number;
  perPage: number;
}

export const useGetCoins = ({ page, perPage }: UseGetCoinsProps) => {
  const api = useApi();

  return useQuery({
    queryKey: ['coins-market'],
    queryFn: () => api.coinGecko.coinsMarket.get(page, perPage),
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