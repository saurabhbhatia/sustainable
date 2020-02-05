import Navbar from '../components/Navbar';
import "../styles/includes.css"
import "../styles/index.css"

const DefaultLayout = ({ children }) => (
    <div>
      <header>
        <h1>Life Sustainable</h1>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
);

export default DefaultLayout;