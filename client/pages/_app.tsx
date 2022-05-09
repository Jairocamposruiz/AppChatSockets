import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Layout } from '../components/layout/Layout';

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
  //Report to analytics
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
