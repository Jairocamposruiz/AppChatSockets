import { theme } from '@theme';

interface Props {
  className?: string;
  message: string;
  date: Date;
}

export const OutgoingMessage = ({ className, message, date }: Props) => {
  return (
    <div
      className={ `p-4 rounded w-message self-end flex flex-col ${theme.textColor} ${theme.outgoingMessage} ${ className }` }
    >
      <p
        className={ `mb-1 whitespace-pre-wrap` }
      >{message}</p>
      <p
        className={ `text-xs self-end ${theme.textColorLabel}` }
      >{date.toLocaleString()}</p>
    </div>
  );
};
