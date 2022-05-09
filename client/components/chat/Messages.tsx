import { IncomingMessage } from '@components/chat/IncomingMessage';
import { OutgoingMessage } from '@components/chat/OutgoingMessage';

interface Props {
  className?: string;
}

export const Messages = ({ className }: Props) => {
  return (
    <div
      className={ `p-4 flex flex-col gap-4 overflow-y-scroll ${ className }` }
    >
      <IncomingMessage
        message={ 'Hello, how are you?' }
        user={ 'John Doe' }
        date={new Date()}
      />

      <OutgoingMessage
        message={ 'Hello, how are you?' }
        date={new Date()}
      />
    </div>
  );
};
