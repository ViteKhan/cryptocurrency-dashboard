import { FC } from 'react';
import { Skeleton } from '@mui/material';

export const SkeletonTable: FC = () => {
  return (
    <>
      <Skeleton animation={'wave'} height={56.5}/>
      <Skeleton animation={'wave'} height={53.02}/>
      <Skeleton animation={'wave'} height={53.02}/>
      <Skeleton animation={'wave'} height={53.02}/>
      <Skeleton animation={'wave'} height={53.02}/>
      <Skeleton animation={'wave'} height={53.02}/>
      <Skeleton animation={'wave'} height={52}/>
    </>
  );
};