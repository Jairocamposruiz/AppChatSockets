import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { theme } from '@theme';

interface Props {
  children: ReactNode;
  exact?: boolean;
  href: string;
}

export const NavLink = ({ children, exact = false, href }: Props) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={ href }>
      <a>
        <div
          className={ `relative flex justify-center` }
        >
          <div
            className={ `
              ${ (isActive) ? theme.navLinkActive : theme.navLink } 
              z-10 px-6 md:w-40 h-14 flex items-center justify-center font-bold
            ` }
          >
            { children }
          </div>
          {
            (isActive) && (
              <div
                className={ `${ (isActive) ? theme.navLinkActive : theme.navLink } w-4 h-4 absolute top-12 rotate-45` }
              />
            )
          }
        </div>
      </a>
    </Link>
  );
};
