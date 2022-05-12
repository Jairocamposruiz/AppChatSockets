import { scrollToBottom } from '@helpers/scroll';
import { SocketContext } from '@store/Socket';
import { useContext } from 'react';

import { GetMessagesResponse } from '@interfaces/responses';
import { fetchWithToken } from '@helpers/fetch';
import { Icon } from '@components/icons/Icon';
import { Chat } from '@interfaces/models';
import { ChatContext } from '@store/Chat';
import { theme } from '@theme';

interface Props {
  className?: string;
  chat: Chat;
  isPublic: boolean;
}

export const ListChatItem = ({ className, chat, isPublic }: Props) => {
  const { name, uid, online } = chat;
  const { activeChat, activePublicChat, chatState, addMessages, addPublicMessages } = useContext(ChatContext);
  const { socket } = useContext(SocketContext);

  const onClick = async () => {
    if (isPublic) {
      activePublicChat(chat);
      socket?.emit('join-chat', chat.uid);
      const resp = await fetchWithToken<GetMessagesResponse>(`public_messages/${ uid }`, {}, 'GET');
      if (!resp?.ok) return;
      addPublicMessages(resp.messages);
    } else {
      activeChat(chat);
      const resp = await fetchWithToken<GetMessagesResponse>(`messages/${ uid }`, {}, 'GET');
      if (!resp?.ok) return;
      addMessages(resp.messages);
    }

    setTimeout(() => scrollToBottom('messages'), 0);
  };

  return (
    <div
      onClick={ onClick }
      className={ `h-24 border-t-2 p-2 cursor-pointer flex ${ theme.borderColor } ${ (chatState.activeChat?.uid === uid) ? theme.chatListItemActive : theme.chatListItem } ${ className }` }
    >
      <Icon
        className={ `h-full ${ theme.chatItemIcon }` }
        icon={ 'user' }
      />

      <div className={ `flex-1 ml-4` }>
        <p
          className={ `text-xl font-medium ${ theme.textColor }` }
        >
          { name }
        </p>
        {
          (!isPublic) && (
            <p
              className={ `mt-1 ${ online ? 'text-green-500 dark:text-green-300' : 'text-red-500 dark:text-red-400' } text-lg` }
            >
              { online ? 'Online' : 'Offline' }
            </p>
          )
        }
      </div>
    </div>
  );
};
