import { Container } from '@components/layout/Container';
import { Title } from '@components/text/Title';
import type { NextPage } from 'next';
import Head from 'next/head';

const ChatsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <Container>
        <Title label={'Chats'} />
      </Container>
    </div>
  );
};

export default ChatsPage;
