import { useContext } from 'react';

import { IncomingMessage } from '@components/chat/IncomingMessage';
import { OutgoingMessage } from '@components/chat/OutgoingMessage';
import { AuthContext } from '@store/Auth';
import { ChatContext } from '@store/Chat';

interface Props {
  className?: string;
  isPublic: boolean;
}

export const Messages = ({ className, isPublic }: Props) => {
  const { chatState } = useContext(ChatContext);
  const { uid } = useContext(AuthContext);

  const messagesToShow = (isPublic) ? chatState.publicMessages : chatState.messages;

  return (
    <div
      id={ 'messages' }
      className={ `p-4 flex flex-col gap-4 overflow-y-scroll pb-40 ${ className }` }
    >
      {
        messagesToShow.map((msg) => (
          (msg.from.uid === uid)
            ? (<OutgoingMessage
              key={ msg._id }
              message={ msg }
              date={ new Date(msg.createdAt) }
            />)
            : (<IncomingMessage
              key={ msg._id }
              message={ msg }
              date={ new Date(msg.createdAt) }
            />)
        ))
      }
    </div>
  );
};
