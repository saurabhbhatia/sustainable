import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { initGA, logPageView } from "../utils/analytics";
import { Component } from "react";

export default class DefaultLayout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED && process.env.NODE_ENV != "development") {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <div>
        <Head>
          <title>
            Sustainable Life | A blog about living sustainably as an individual.
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/a2da7fb0c72e11bfd672b010c/a8a85779f38192fc191f8978c.js");`,
            }}
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
