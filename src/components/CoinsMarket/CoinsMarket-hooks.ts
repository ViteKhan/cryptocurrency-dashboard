import { ChangeEvent, useState } from 'react';

export const useSearchFilter = () => {
  const [search, setSearch] = useState<string>('');

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return { search, onChangeSearch };
};