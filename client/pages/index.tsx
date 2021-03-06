import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import { AuthContext } from '@store/Auth';
import { Text } from '@components/text/Text';
import { Title } from '@components/text/Title';
import { theme } from '@theme';

import { Container } from '@components/layout/Container';

const Home: NextPage = () => {
  const { logged } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>JCodeR Chat</title>
        <meta name="description" content="Aplicación de chats para la página JCodeR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title label={ 'Bienvenido nuestro nuevo centro de chat' } />

        <Text>
          Esta app se ha construido con la finalidad se servir de chat público para mi web
          <a
            target={ '_black' }
            className={ `mx-2 ${ theme.textColorActive }` }
            href={ 'https://blog.jcoder.es' }
          >blog.JCodeR.es</a>
          allí podrás encontrar tutoriales paso a paso sobre como crear aplicaciones similares, junto con el código
          fuente de este proyecto.
        </Text>

        <Text>
          Este chat tiene dos funcionalidades principales las salas de chats públicos donde se debaten temas y todos
          podemos aportar, y las salas de chat privados donde podremos enviar y recibir mensajes de otros miembros de la
          comunidad de manera privada.
        </Text>

        {
          (!logged) && (
            <Text
              className={ `bg-yellow-100 dark:bg-sky-800 p-4 rounded-lg` }
            >
              Para poder leer o escribir comentarios es necesario crearse una cuenta e iniciar sesión, para lo cual solo
              se pedirá el nombre que se quiere mostrar y una contraseña.
            </Text>
          )
        }
      </Container>
    </div>
  );
};

export default Home;

