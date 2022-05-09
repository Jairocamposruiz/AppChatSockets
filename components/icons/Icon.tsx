import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faMessage, faUser, faComments, faUsers, faGear, faAngleLeft, faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';

type IconDictionary = Record<string, IconDefinition>;

interface Props {
  className?: string;
  icon: keyof IconDictionary;
  onClick?: MouseEventHandler<SVGSVGElement>;
  width?: string | number | undefined;
  height?: string | number | undefined;
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

export const Icon = ({ className, icon, onClick, width, height }: Props) => {

  return (
    <FontAwesomeIcon
      onClick={ onClick }
      className={ `${ className }` }
      icon={ icons[icon] }
      width={width}
      height={height}
    />
  );
};
