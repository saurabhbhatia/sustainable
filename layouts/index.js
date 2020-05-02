import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { initGA, logPageView } from "../utils/analytics";
import { Component } from "react";

export default class DefaultLayout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  
  render() {
    return (
      <div>
        <Head>
          <title>Sustainable Life</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <Navbar />
        </header>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
