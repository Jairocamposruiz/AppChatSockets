import type { AppProps, NextWebVitalsMetric } from 'next/app';

import '../styles/globals.css';
import { Layout } from '@components/layout/Layout';
import { AuthProvider } from '@store/Auth';
import { ChatProvider } from '@store/Chat';

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
  //Report to analytics
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChatProvider>
      <AuthProvider>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </AuthProvider>
    </ChatProvider>
  );
}

export default MyApp;
