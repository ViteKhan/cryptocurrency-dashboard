import { FC } from 'react';
import { TableBody as MuiTableBody, TableCell, TableRow } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Coin } from 'models';

interface TableBodyProps {
  coins: Coin[];
}

export const TableBody: FC<TableBodyProps> = ({ coins }) => {
  const theme = useTheme();
  return (
    <MuiTableBody>
      {coins.length
        ? coins.map(coin => {
          const {
            id,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
            total_volume,
            market_cap,
          } = coin;
          const isPriceChangedMoreThanZero = price_change_percentage_24h > 0;

          return (
            <TableRow hover key={id}>
              <TableCell><img src={image} alt={name} style={{ height: '30px', width: '30px' }}/></TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{symbol}</TableCell>
              <TableCell>{current_price.toFixed(2)}</TableCell>
              <TableCell>
                <span
                  style={{
                    color: theme.palette.mode === 'dark'
                      ? isPriceChangedMoreThanZero ? theme.palette.success.main : theme.palette.error.main
                      : isPriceChangedMoreThanZero? theme.palette.success.dark : theme.palette.error.dark
                  }}
                >
                  {price_change_percentage_24h.toFixed(2)}%
                </span>
              </TableCell>
              <TableCell>{total_volume.toLocaleString()}</TableCell>
              <TableCell>{market_cap.toLocaleString()}</TableCell>
            </TableRow>
          );
        })
        : <TableRow><TableCell>Not found</TableCell></TableRow>
      }
    </MuiTableBody>
  );
};