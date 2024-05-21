import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '~/components/layout';
import Loader from '~/components/Loader';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
