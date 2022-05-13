import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useEffect } from 'react';

import { Button } from '@components/buttons/Button';
import { InputText } from '@components/input/InputText';
import { Container } from '@components/layout/Container';
import { Title } from '@components/text/Title';
import { useForm } from '@hooks/useForm';
import { AuthContext } from '@store/Auth';
import { theme } from '@theme';
import { alertError } from '@helpers/alert';

const RegisterPage: NextPage = () => {
  const { register, logged } = useContext(AuthContext);
  const router = useRouter();

  const { onChange, name, password1, password2 } = useForm({
    name: '',
    password1: '',
    password2: ''
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.length < 3) return alertError('Error en el formulario', 'El nombre de usuario debe tener al menos 3 caracteres');
    if (password1.length < 6 || password2.length < 6) return alertError('Error en el formulario', 'La contraseña debe tener al menos 6 caracteres');
    if (password1 !== password2) return alertError('Error en el formulario', 'Las contraseñas no coinciden');

    const isCorrect = await register(name, password1);
    if (!isCorrect) return alertError('Error en el formulario', 'El nombre de usuario ya existe, pruebe con otro');
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
            <Title label={ 'Crear cuenta' } />
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
              name={ 'password1' }
              value={ password1 }
              type={ 'password' }
              minLength={ 6 }
            />
            <InputText
              label={ 'Repite el password:' }
              onChange={ onChange }
              name={ 'password2' }
              value={ password2 }
              type={ 'password' }
              minLength={ 6 }
            />
            <Button
              className={ `mt-4` }
              text={ 'Registrarse' }
              type={ 'submit' }
            />
            <Link
              href={'/auth/login'}
            >
              <a className={`mt-2 ${theme.textColorActive}`}>
                Login
              </a>
            </Link>
          </form>
        </div>
      </Container>
    </div>
  )
};

export default RegisterPage;
