import { scrollToBottom } from '@helpers/scroll';
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
}

export const ListChatItem = ({ className, chat }: Props) => {
  const { name, uid, online } = chat;
  const { activeChat, chatState, addMessages } = useContext(ChatContext);

  const onClick = async () => {
    activeChat(chat);

    const resp = await fetchWithToken<GetMessagesResponse>(`messages/${ uid }`, {}, 'GET');
    if (!resp?.ok) return;

    addMessages(resp.messages);

    setTimeout(() => scrollToBottom('messages'), 0);
  };

  return (
    <div
      onClick={ onClick }
      className={ `h-24 border-t-2 p-2 cursor-pointer flex ${ (chatState.activeChat?.uid === uid) ? theme.chatListItemActive : theme.chatListItem } ${ className }` }
    >
      <Icon
        className={ `h-full text-gray-400` }
        icon={ 'user' }
      />

      <div className={ `flex-1 ml-4` }>
        <p
          className={ `text-xl font-medium text-gray-900` }
        >
          { name }
        </p>
        <p
          className={ `mt-1 ${ online ? 'text-green-500' : 'text-red-500' } text-lg` }
        >
          { online ? 'Online' : 'Offline' }
        </p>
      </div>
    </div>
  );
};
