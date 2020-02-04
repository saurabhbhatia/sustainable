import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { getStaticPage } from '../api';
import DefaultLayout from '../layouts';

export default class Contact extends Component {
  static async getInitialProps() {
    const response = await getStaticPage('contact');
    return {
      page: response
    };
  }

  render() {
    const page = this.props.page.data;
    return (
      <DefaultLayout>
        <article>
          <h1>{page.title.length ? page.title[0].text : ''}</h1>
          {RichText.render(page.body)}
        </article>
      </DefaultLayout>
    );
  }
}