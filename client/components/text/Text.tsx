import { theme } from '@theme';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Text = ({ className, children }: Props) => {
  return (
    <p
      className={ `my-2 mx-4 ${ theme.textColor } ${ className }` }
    >
      { children }
    </p>
  );
};
