import { UIProvider } from '@store/UI';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

import '../styles/globals.css';
import { Layout } from '@components/layout/Layout';
import { AuthProvider } from '@store/Auth';
import { ChatProvider } from '@store/Chat';
import { SocketProvider } from '@store/Socket';

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
  //Report to analytics
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <UIProvider>
            <Layout>
              <Component { ...pageProps } />
            </Layout>
          </UIProvider>
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
}

export default MyApp;
