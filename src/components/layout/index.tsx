import Head from 'next/head';
import Navbar from '../Navbar';
import { LayoutContainer } from './styles';
import Footer from '../Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

/**
 * `Props` type.
 */

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutContainer className="layout-body">
      <Head>
        <link />
        <meta
          name="adopt-website-id"
          content="47d3010a-adcc-4ac3-aad0-a56ee61b2ca5"
        /> 
      </Head>
      <Script
        src="//tag.goadopt.io/injector.js?website_code=47d3010a-adcc-4ac3-aad0-a56ee61b2ca5"
        className="adopt-injector"
      />
      <Navbar />
      {children}
      <Footer isContact={router.pathname === '/contact-us'} />
    </LayoutContainer>
  );
};

export default Layout;
