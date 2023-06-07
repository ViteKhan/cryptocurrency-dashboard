import { FC, ReactNode } from 'react';

import { Header } from '../Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};