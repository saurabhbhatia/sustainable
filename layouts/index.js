import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-K9D9H4G'
}

TagManager.initialize(tagManagerArgs);

const DefaultLayout = ({ children }) => (
  <div>
    <Head>
      <title>Sustainable Life</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;