import { theme } from '@theme';

interface Props {
  className?: string;
  message: string;
  date: Date;
  user: string;
}

export const IncomingMessage = ({ className, message, date, user }: Props) => {
  return (
    <div
      className={ `p-4 rounded w-message self-start flex flex-col ${theme.textColor} ${theme.incomingMessage} ${ className }` }
    >
      <p
        className={ `font-medium mb-2` }
      >{user}</p>
      <p
        className={ `mb-1 whitespace-pre-wrap` }
      >{message}</p>
      <p
        className={ `text-xs self-end ${theme.textColor}` }
      >{date.toLocaleString()}</p>
    </div>
  );
};
// Exercise
