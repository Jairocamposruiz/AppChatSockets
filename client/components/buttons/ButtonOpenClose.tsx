import { theme } from '@theme';
import { MouseEventHandler } from 'react';

import { Icon } from '@components/icons/Icon';

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

export const ButtonOpenClose = ({ className, isOpen, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={ `px-4 items-center ${theme.buttonPrimary} ${ className }` }
    >
      <Icon
        className="h-8"
        icon={(isOpen) ? 'arrowLeft' : 'arrowRight'}
      />
    </button>
  );
};
