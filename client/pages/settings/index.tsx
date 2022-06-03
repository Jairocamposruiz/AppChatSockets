import { SwitchDarkLight } from '@components/buttons/SwitchDarkLight';
import { Container } from '@components/layout/Container';
import { Title } from '@components/text/Title';
import { theme } from '@theme';
import type { NextPage } from 'next';
import Head from 'next/head';

const SettingsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ajustes | JCodeR</title>
        <meta name="description" content="Ajustes" />
      </Head>

      <Container>
        <Title label={'Ajustes'} />

        <label
          className={`mt-8 mb-4 ${theme.textColorLabel}`}
        >
          Dark Mode / Light Mode
        </label>
        <SwitchDarkLight />
      </Container>
    </div>
  );
};

export default SettingsPage;
