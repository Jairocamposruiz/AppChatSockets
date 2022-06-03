import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { Chat } from '@components/chat/Chat';
import { ChatUnselect } from '@components/chat/ChatUnselect';
import { ListChat } from '@components/chat/ListChat';
import { ContainerScreen } from '@components/layout/ContainerScreen';
import { AuthContext } from '@store/Auth';
import { ChatContext } from '@store/Chat';

const UsersPage: NextPage = () => {
  const router = useRouter();
  const { chatState } = useContext(ChatContext);
  const { uid, logged } = useContext(AuthContext);
  const users = chatState.users.filter((user) => {
    return user.uid !== uid;
  });

  useEffect(() => {
    if (!logged) {
      router.push('/auth/login');
    }
  }, [logged, router]);

  return (
    <div>
      <Head>
        <title>Chats Privados | JCodeR</title>
        <meta name="description" content="Chatea de forma privada con otros usuarios" />
      </Head>

      <ContainerScreen>
        <ListChat title={ 'Chats privados' } chats={ users } />

        { (chatState.activeChat)
          ? <Chat name={ chatState.activeChat.name } />
          : <ChatUnselect />
        }
      </ContainerScreen>
    </div>
  );
};

export default UsersPage;
