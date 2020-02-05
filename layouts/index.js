import Navbar from '../components/Navbar';
import "../styles/includes.css"
import "../styles/index.css"

const DefaultLayout = ({ children }) => (
    <div>
      <header>
        <h1 className="text-cyan">Life Sustainable</h1>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
);

export default DefaultLayout;