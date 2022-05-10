import { theme } from '@theme';

interface Props {
  className?: string;
  message: string;
  date: string;
  user: string;
}

export const IncomingMessage = ({ className, message, date, user }: Props) => {
  return (
    <div
      className={ `p-4 rounded w-message self-start flex flex-col ${theme.incomingMessage} ${ className }` }
    >
      <p
        className={ `font-medium mb-2` }
      >{user}</p>
      <p
        className={ `mb-1` }
      >{message}</p>
      <p
        className={ `text-xs text-gray-500 self-end` }
      >{date.toLocaleString()}</p>
    </div>
  );
};
