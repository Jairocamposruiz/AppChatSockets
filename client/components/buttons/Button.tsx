import { theme } from '@theme';
import { MouseEventHandler } from 'react';

interface Props {
  className?: string;
  typeStyle?: 'primary' | 'secondary' | 'danger';
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ className, typeStyle = 'primary', text, onClick, type = 'button' }: Props) => {

  const color = (): string => {
    switch (typeStyle) {
      case 'primary':
        return theme.buttonPrimary;
      case 'secondary':
        return theme.buttonSecondary;
      case 'danger':
        return theme.buttonDanger;
    }
  };

  return (
    <button
      className={ `${ className } ${ color() } px-4 py-2 rounded-md text-center cursor-pointer transition active:translate-y-0.5 shadow-lg font-bold text-black` }
      onClick={ onClick }
      type={ type }
    >
      <h1>{ text }</h1>
    </button>
  );
};
