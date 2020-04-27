import React, { Component } from "react";
import { RichText } from "prismic-reactjs";
import { getStaticPage } from "../api";
import DefaultLayout from "../layouts";

export default class About extends Component {
  static async getInitialProps() {
    const response = await getStaticPage("about");
    return {
      page: response,
    };
  }

  render() {
    const page = this.props.page.data;
    if (!page) {
      return <Error statusCode={404} />; // Present adequate 404
    }
    return (
      <DefaultLayout>
        <article>
          <h1 className="text-5xl text-center font-headings">
            {page.title.length ? page.title[0].text : ""}
          </h1>
          <div className="flex flex-column flex-start md:mx-2 sm:mx-2 font-body text-xl border-t">
            <div className="lg:w-1/2 md:w-full sm:w-full inline-block m-0 m-auto text-justify">
              {RichText.render(page.body)}
            </div>
          </div>
        </article>
      </DefaultLayout>
    );
  }
}
