import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from './../../styles/Home.module.css';
import Hero from './../components/Hero';
import PortfolioManagement from './../components/PortfolioManagement';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Capital Advisors | Abacus</title>
        <meta
          property="og:description"
          content="Abacus Capital Advisors provides comprehensive wealth management, investment strategies, and personalized financial planning services."
        />
        <meta name="keywords" content="capital advisors" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Hero />
        <PortfolioManagement />
      </main>
    </>
  );
}
