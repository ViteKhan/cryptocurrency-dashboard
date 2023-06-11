import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { HEADERS } from './CoinsTable-constants';

export const CoinsTable: FC = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {HEADERS.map(cell => (
            <TableCell key={cell.id} sx={{ fontWeight: 'bold' }}>{cell.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
      </TableBody>
    </Table>
  );
};