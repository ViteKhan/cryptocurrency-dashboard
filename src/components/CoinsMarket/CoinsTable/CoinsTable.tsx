import { FC, useMemo } from 'react';
import { Card, Table, TableContainer, TablePagination } from '@mui/material';

import { Loader } from 'components/Loader';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { useGetCoins, usePagination } from './CoinsTable-hooks';

interface CoinsTableProps {
  searchTerm: string;
}

export const CoinsTable: FC<CoinsTableProps> = ({ searchTerm}) => {
  const { page, perPage, onChangePage, onChangePerPage } = usePagination();
  const { data, isLoading, isSuccess } = useGetCoins({ page, perPage });

  const filteredCoins = useMemo(() => {
    return isSuccess
      // @ts-ignore
      ? data.filter(coin =>  coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [];
  }, [data, searchTerm, isSuccess]);

  const coins = useMemo(() => {
    const startIndex = page * perPage;
    return filteredCoins.slice(startIndex, startIndex + perPage);
  }, [filteredCoins, page, perPage]);

  if (isLoading) return <Loader/>;

  return (
    <TableContainer component={Card}>
      <Table>
        <TableHeader/>
        <TableBody coins={coins}/>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={data?.length || 0}
        rowsPerPage={perPage}
        page={page}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangePerPage}
      />
    </TableContainer>
  );
};