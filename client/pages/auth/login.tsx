import { FormEvent, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import type { NextPage } from 'next';
import Head from 'next/head';

import { Button } from '@components/buttons/Button';
import { InputText } from '@components/input/InputText';
import { Title } from '@components/text/Title';
import { Container } from '@components/layout/Container';
import { theme } from '@theme';
import { useForm } from '@hooks/useForm';
import { AuthContext } from '@store/Auth';

const LoginPage: NextPage = () => {
  const { login, logged } = useContext(AuthContext);
  const router = useRouter();

  const { onChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.length < 3) return;
    if (password.length < 6) return;

    login(email, password);
  };

  useEffect(() => {
    if(logged) {
      router.push('/');
    }
  }, [logged])

  return (
    <div>
      <Head>
        <title>Nombre de la página</title>
        <meta name="description" content="Descripción de la página" />
      </Head>

      <Container>
        <div className={ `p-8 rounded-lg ${ theme.bgCard }` }>
          <form
            onSubmit={ onSubmit }
            className={ `flex flex-col gap-2` }
          >
            <Title label={ 'Iniciar sesión' } />
            <InputText
              label={ 'Email:' }
              placeholder={ 'example@gmail.com' }
              onChange={ onChange }
              value={ email }
              name={ 'email' }
              type={ 'email' }
              minLength={ 3 }
            />
            <InputText
              label={ 'Password:' }
              placeholder={ '******' }
              onChange={ onChange }
              name={ 'password' }
              value={ password }
              type={ 'password' }
              minLength={ 6 }
            />
            <Button
              className={ `mt-4` }
              typeStyle={ 'primary' }
              text={ 'Iniciar Sesión' }
              type={ 'submit' }
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
