import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faMessage, faUser, faComments, faUsers, faGear, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';

type Icon = Record<string, IconDefinition>;

interface Props {
  className?: string;
  icon: keyof Icon;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const icons: Icon = {
  moon: faMoon,
  sun: faSun,
  message: faMessage,
  user: faUser,
  users: faUsers,
  chat: faComments,
  settings: faGear,
};

export const Icon = ({ className, icon, onClick }: Props) => {

  return (
    <FontAwesomeIcon
      onClick={ onClick }
      className={ `${ className }` }
      icon={ icons[icon] }
    />
  );
};
