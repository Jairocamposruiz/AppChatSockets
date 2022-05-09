import Image from 'next/image';

import { Icon } from '@components/icons/Icon';
import { NavLink } from '@components/navbar/NavLink';
import { theme } from '@theme';

interface Props {
  className?: string;
}

const links = [
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
];

export const Navbar = ({ className }: Props) => {
  return (
    <nav
      className={ `flex w-full justify-between items-center h-navbar ${ theme.bgNavbar } ${ className }` }
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
              className={`text-2xl`}
            />
            <h3 className={ `ml-3 hidden md:flex ` }>{ label }</h3>
          </NavLink>
        )) }
      </div>
    </nav>
  );
};
