import { ChangeEvent, FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  InputAdornment,
  SvgIcon,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchFilterProps {
  search: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchFilter: FC<SearchFilterProps> = ({ search, onChangeSearch }) => {
  return (
    <Card>
      <CardContent sx={{ "&:last-child": { paddingBottom: '16px' }, borderRadius: '4px' }}>
        <Box sx={{ maxWidth: 500 }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position={'start'}>
                  <SvgIcon fontSize={'small'} color={'action'}>
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder={'Search a cryptocurrency'}
            variant={'outlined'}
            onChange={onChangeSearch}
            value={search}
          />
        </Box>
      </CardContent>
    </Card>
  );
};