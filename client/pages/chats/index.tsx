import { Chat } from '@components/chat/Chat';
import { ChatUnselect } from '@components/chat/ChatUnselect';
import { ListChat } from '@components/chat/ListChat';
import { ContainerScreen } from '@components/layout/ContainerScreen';
import { ChatContext } from '@store/Chat';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

const ChatsPage: NextPage = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <ContainerScreen>
        <ListChat title={'Chats públicos'} />

        {(chatState.activeChat)
          ? <Chat name={'Nombre del chat seleccionado'} />
          : <ChatUnselect />
        }

      </ContainerScreen>
    </div>
  );
};

export default ChatsPage;
