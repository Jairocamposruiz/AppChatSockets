import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faMessage, faUser, faComments, faUsers, faGear, faAngleLeft, faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';

type IconDictionary = Record<string, IconDefinition>;

interface Props {
  className?: string;
  icon: keyof IconDictionary;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const icons: IconDictionary = {
  moon: faMoon,
  sun: faSun,
  message: faMessage,
  user: faUser,
  users: faUsers,
  chat: faComments,
  settings: faGear,
  arrowLeft: faAngleLeft,
  arrowRight: faAngleRight,
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
