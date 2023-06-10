import { FC } from 'react';
import { Box, Card, CardContent, InputAdornment, SvgIcon, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useSearchFilter } from './SearchFilter-hooks';

export const SearchFilter: FC = () => {
  const { search, onChangeSearch } = useSearchFilter();
  return (
    <Card>
      <CardContent sx={{ "&:last-child": { paddingBottom: '16px' }, borderRadius: '4px' }}>
        <Box sx={{ maxWidth: 500 }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SvgIcon fontSize='small' color='action'>
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder='Search a cryptocurrency'
            variant='outlined'
            onChange={onChangeSearch}
            value={search}
          />
        </Box>
      </CardContent>
    </Card>
  );
};