import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '~/components/layout';
import Loader from '~/components/Loader';
import { useEffect, useState } from 'react';
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <head>
            <title>Abacus</title>
            <meta name="description" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="use-credentials"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
              rel="stylesheet"
            />
          </head>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
