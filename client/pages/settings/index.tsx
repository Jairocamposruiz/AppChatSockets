import { Container } from '@components/layout/Container';
import type { NextPage } from 'next';
import Head from 'next/head';

const SettingsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <Container>
        <h1>Settings</h1>
      </Container>
    </div>
  );
};

export default SettingsPage;
