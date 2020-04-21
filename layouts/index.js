import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
);

export default DefaultLayout;