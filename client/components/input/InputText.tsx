import { theme } from '@theme';
import { ChangeEventHandler } from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  type?: 'email' | 'password' | 'text';
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export const InputText = ({
  className,
  value,
  name,
  required = false,
  placeholder,
  onChange,
  label,
  type = 'text',
  minLength,
  maxLength
}: Props) => {
  return (
    <div
      className={ `my-2 flex flex-col gap-1 ${ className }` }
    >
      <label
        className={ `font-semibold ${ theme.textColorLabel }` }
      >{ label }
      </label>
      <input
        value={ value }
        name={ name }
        onChange={ onChange }
        type={ type }
        required={ required }
        minLength={ minLength }
        maxLength={ maxLength }
        placeholder={ placeholder }
        className={ `rounded py-1 px-2 ${ theme.input } ${theme.textColor}` }
      />
    </div>
  );
};
