import Navbar from '../components/Navbar';
import "../styles/includes.css"
import "../styles/index.css"
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