import { useContext } from 'react';

import { IncomingMessage } from '@components/chat/IncomingMessage';
import { OutgoingMessage } from '@components/chat/OutgoingMessage';
import { AuthContext } from '@store/Auth';
import { ChatContext } from '@store/Chat';

interface Props {
  className?: string;
}

export const Messages = ({ className }: Props) => {
  const { chatState } = useContext(ChatContext);
  const { uid } = useContext(AuthContext);

  return (
    <div
      id={ 'messages' }
      className={ `p-4 flex flex-col gap-4 overflow-y-scroll pb-40 ${ className }` }
    >
      {
        chatState.messages.map((msg) => (
          (msg.from === uid)
            ? (<OutgoingMessage
              key={ msg._id }
              message={ msg.message }
              date={ new Date(msg.createdAt) }
            />)
            : (<IncomingMessage
              key={ msg._id }
              message={ msg.message }
              user={ chatState.activeChat?.name || '' }
              date={ new Date(msg.createdAt) }
            />)
        ))
      }
    </div>
  );
};
