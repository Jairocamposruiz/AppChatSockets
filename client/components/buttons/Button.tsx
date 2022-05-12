import { theme } from '@theme';
import { MouseEventHandler } from 'react';

interface Props {
  className?: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ className, text, onClick, type = 'button' }: Props) => {

  return (
    <button
      className={ `px-4 py-2 rounded-md text-center cursor-pointer transition active:translate-y-0.5 shadow-lg font-bold text-black ${ theme.buttonPrimary } ${ className }` }
      onClick={ onClick }
      type={ type }
    >
      <h1>{ text }</h1>
    </button>
  );
};
