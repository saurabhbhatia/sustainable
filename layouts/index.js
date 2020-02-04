import Navbar from '../components/Navbar';

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