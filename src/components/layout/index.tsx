import Head from 'next/head';
import Navbar from '../Navbar';
import { LayoutContainer } from './styles';
import Footer from '../Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * `Props` type.
 */

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // AOS.init({
    //   delay: 200
    // });
  }, []);

  return (
    <LayoutContainer className="layout-body">
      <Head>
        <link />
      </Head>
      <Navbar />
      {children}
      <Footer isContact={router.pathname === '/contact-us'} />
    </LayoutContainer>
  );
};

export default Layout;
