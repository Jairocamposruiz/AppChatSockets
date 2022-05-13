import { AuthContext } from '@store/Auth';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Chat } from '@components/chat/Chat';
import { ChatUnselect } from '@components/chat/ChatUnselect';
import { ListChat } from '@components/chat/ListChat';
import { ContainerScreen } from '@components/layout/ContainerScreen';
import { ChatContext } from '@store/Chat';

const ChatsPage: NextPage = () => {
  const router = useRouter();
  const { chatState } = useContext(ChatContext);
  const { logged } = useContext(AuthContext);

  const chats = chatState.chats;

  useEffect(() => {
    if (!logged) {
      router.push('/auth/login');
    }
  }, [logged, router]);

  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <ContainerScreen>
        <ListChat isPublic title={ 'Chats públicos' } chats={ chats } />

        { (chatState.publicActiveChat)
          ? <Chat isPublic name={ chatState.publicActiveChat.name } />
          : <ChatUnselect />
        }

      </ContainerScreen>
    </div>
  );
};

export default ChatsPage;
