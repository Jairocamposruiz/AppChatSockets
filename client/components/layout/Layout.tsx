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
      className={ `flex w-full flex-col min-h-screen max-w-screen overflow-y-hidden justify-between ${theme.bgPage} ${ className }` }
    >
      <Navbar />
      <div
        className={ `flex-1 flex` }
      >
        { children }
      </div>
      {/*<Footer />*/}
    </div>
  );
};
