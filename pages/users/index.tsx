import { Chat } from '@components/chat/Chat';
import { ListChat } from '@components/chat/ListChat';
import { ContainerScreen } from '@components/layout/ContainerScreen';
import type { NextPage } from 'next';
import Head from 'next/head';

const UsersPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <ContainerScreen>
        <ListChat title={'Chats privados'} />

        <Chat
          name={'Fulanito de tal'}
        />
      </ContainerScreen>
    </div>
  );
};

export default UsersPage;
