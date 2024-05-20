import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '~/styles/Home.module.css';
import { useEffect } from 'react';
import { exampleRequestGQL } from '~/services/connection';
import Hero from '~/components/Hero';
import PortfolioManagement from '~/components/PortfolioManagement';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    // exampleRequestGQL();
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Hero />
        <PortfolioManagement />
      </main>
    </>
  );
}
