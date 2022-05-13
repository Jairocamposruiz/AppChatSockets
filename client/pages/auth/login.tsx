import { FormEvent, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@components/buttons/Button';
import { InputText } from '@components/input/InputText';
import { Title } from '@components/text/Title';
import { Container } from '@components/layout/Container';
import { theme } from '@theme';
import { useForm } from '@hooks/useForm';
import { AuthContext } from '@store/Auth';
import { alertError } from '@helpers/alert';

const LoginPage: NextPage = () => {
  const { login, logged } = useContext(AuthContext);
  const router = useRouter();

  const { onChange, name, password } = useForm({
    name: '',
    password: '',
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.length < 3) return alertError('Error en el formulario', 'El nombre de usuario debe tener al menos 3 caracteres');
    if (password.length < 6) return alertError('Error en el formulario', 'La contraseña debe tener al menos 6 caracteres');

    const isCorrect = await login(name, password);
    if (!isCorrect) return alertError('Error en el formulario', 'El nombre de usuario o la contraseña son incorrectos');
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

      <Container
        center
      >
        <div className={ `p-8 rounded-lg w-80 ${ theme.bgCard }` }>
          <form
            onSubmit={ onSubmit }
            className={ `flex flex-col gap-2` }
          >
            <Title label={ 'Iniciar sesión' } />
            <InputText
              label={ 'Nombre:' }
              onChange={ onChange }
              value={ name }
              name={ 'name' }
              type={ 'text' }
              minLength={ 3 }
            />
            <InputText
              label={ 'Password:' }
              onChange={ onChange }
              name={ 'password' }
              value={ password }
              type={ 'password' }
              minLength={ 6 }
            />
            <Button
              className={ `mt-4` }
              text={ 'Iniciar Sesión' }
              type={ 'submit' }
            />

            <Link
              href={'/auth/register'}
            >
              <a className={`mt-2 ${theme.textColorActive}`}>
                Registrase
              </a>
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
