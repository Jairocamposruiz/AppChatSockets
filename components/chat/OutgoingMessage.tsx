import { theme } from '@theme';

interface Props {
  className?: string;
  message: string;
  date: Date;
}

export const OutgoingMessage = ({ className, message, date }: Props) => {
  return (
    <div
      className={ `p-4 rounded w-message self-end flex flex-col ${theme.outgoingMessage} ${ className }` }
    >
      <p
        className={ `mb-1` }
      >{message}</p>
      <p
        className={ `text-xs text-gray-500 self-end` }
      >{date.toLocaleString()}</p>
    </div>
  );
};
