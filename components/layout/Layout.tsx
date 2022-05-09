import { ReactNode } from 'react';

import { theme } from '@theme';
import { Footer } from '@components/footer/Footer';
import { Navbar } from '@components/navbar/Navbar';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Layout = ({ className, children }: Props) => {
  return (
    <div
      className={ `flex flex-col min-h-screen justify-between ${theme.bgPage} ${ className }` }
    >
      <Navbar />
        { children }
      <Footer />
    </div>
  );
};
