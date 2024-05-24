import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '~/components/layout';
import Loader from '~/components/Loader';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // setIsLoading(false);
    }, 1000);

    if (document) {
      console.log('Loaded');
      const paths = document.getElementsByTagName('path');

      const observer = new IntersectionObserver(
        (entries, observer) => {
          console.log('observer', observer);
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target) {
              (entry.target as HTMLLIElement).style.animationPlayState =
                'running';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      for (let i = 0; i < paths.length; i++) {
        observer.observe(paths[i]);
      }
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'linear',
    });
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
