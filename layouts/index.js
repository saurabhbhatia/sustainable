import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'

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