import type { AppProps } from 'next/app';
import { Layout } from 'components/layout';
import Head from 'next/head';
import '../styles/base.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&family=Indie+Flower&display=swap"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
