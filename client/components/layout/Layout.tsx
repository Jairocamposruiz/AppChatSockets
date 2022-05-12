import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { theme } from '@theme';
import { Footer } from '@components/footer/Footer';
import { Navbar } from '@components/navbar/Navbar';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Layout = ({ className, children }: Props) => {
  const { pathname } = useRouter();

  const withoutFooter = ['/chats', '/users'];

  return (
    <div
      className={ `flex w-full flex-col min-h-screen max-w-screen overflow-y-hidden overflow-x-hidden justify-between ${theme.bgPage} ${ className }` }
    >
      <Navbar />
      <div
        className={ `flex-1 flex` }
      >
        { children }
      </div>
      {
        (!withoutFooter.includes(pathname)) && <Footer />
      }
    </div>
  );
};
