import { AuthContext } from '@store/Auth';
import Image from 'next/image';

import { Icon } from '@components/icons/Icon';
import { NavLink } from '@components/navbar/NavLink';
import { theme } from '@theme';
import { useContext, useEffect, useState } from 'react';

interface Props {
  className?: string;
}

interface Link {
  href: string;
  label: string;
  icon: string;
}

const listOfLinks: Link[] = [
  {
    href: '/chats',
    label: 'Chats',
    icon: 'chat',
  },
  {
    href: '/users',
    label: 'Usuarios',
    icon: 'users',
  },
  {
    href: '/settings',
    label: 'Ajustes',
    icon: 'settings',
  },
  {
    href: '/auth/login',
    label: 'Login',
    icon: 'user',
  },
];

export const Navbar = ({ className }: Props) => {
  const { logged, logout } = useContext(AuthContext);

  const [links, setLinks] = useState<Link[]>(listOfLinks);

  useEffect(() => {
    if (logged) {
      const filteredLinks = listOfLinks!.filter((link) => link.href !== '/auth/login');
      setLinks(filteredLinks);
    } else {
      setLinks(listOfLinks);
    }
  }, [logged]);

  return (
    <nav
      className={ `flex w-full justify-between items-center  ${ theme.bgNavbar } ${ className }` }
    >
      <div>
        <NavLink exact href="/">
          <Image src="/logo.svg" alt="JCodeR Logo" width={ 40 } height={ 40 } />
          <h3 className={ `ml-3 hidden md:flex ` }>JChat</h3>
        </NavLink>
      </div>
      <div className={ `flex` }>
        { links.map(({ href, label, icon }) => (
          <NavLink exact href={ href } key={ href }>
            <Icon
              icon={ icon }
              className={ `sm:w-8 sm:h-8 w-6 h-6` }
            />
            <h3 className={ `ml-3 hidden md:flex ` }>{ label }</h3>
          </NavLink>
        )) }
        {
          (logged) && (
            <button
              className={ `z-10 px-6 md:w-40 h-14 flex items-center justify-center font-bold ${theme.navLogout}` }
              onClick={logout}
            >
              <Icon
                icon={ 'logout' }
                className={ `sm:w-8 sm:h-8 w-6 h-6` }
              />
              <h3 className={ `ml-3 hidden md:flex` }>{ 'Logout' }</h3>
            </button>
          )
        }
      </div>
    </nav>
  );
};
