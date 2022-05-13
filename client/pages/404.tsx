import { theme } from '@theme';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Container } from '@components/layout/Container';
import { Title } from '@components/text/Title';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <Container center>
        <Title label={'Página no encontrada'} />
        <Link
          href={'/'}
        >
          <a
            className={`p-4 mt-8 rounded text-lg font-bold ${theme.textColor} ${theme.buttonPrimary}`}
          >
            Volver a la página principal
          </a>
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
