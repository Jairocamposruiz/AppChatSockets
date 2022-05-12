import { Message } from '@interfaces/models';
import { theme } from '@theme';

interface Props {
  className?: string;
  message: Message;
  date: Date;
}

export const IncomingMessage = ({ className, message, date }: Props) => {
  return (
    <div
      className={ `p-4 rounded w-message self-start flex flex-col ${theme.textColor} ${theme.incomingMessage} ${ className }` }
    >
      <p
        className={ `font-bold text-lg mb-2` }
      >{message.from.name}</p>
      <p
        className={ `mb-1 whitespace-pre-wrap` }
      >{message.message}</p>
      <p
        className={ `text-xs self-end ${theme.textColor}` }
      >{date.toLocaleString()}</p>
    </div>
  );
};
// Exercise
