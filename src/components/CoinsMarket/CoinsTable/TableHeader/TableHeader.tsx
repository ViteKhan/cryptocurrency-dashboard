import { FC } from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const HEADERS = [
  { id: 'icon', title: '' },
  { id: 'name', title: 'Name' },
  { id: 'symbol', title: 'Symbol' },
  { id: 'price', title: 'Price ($)' },
  { id: '24h', title: '24h' },
  { id: 'volume', title: 'Volume ($)' },
  { id: 'marketCup', title: 'Market Cap ($)' },
];

export const TableHeader: FC = () => (
  <TableHead>
    <TableRow>
      {HEADERS.map(cell => (
        <TableCell key={cell.id} sx={{ fontWeight: 'bold' }}>{cell.title}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);