import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { getBlogPostAPI } from '../api';
import linkResolver from '../helpers';
import DefaultLayout from '../layouts';

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    return {
      post: response
    };
  }

  render() {
    const post = this.props.post.data;
    return (
      <DefaultLayout>
        <article>
          <h1 className="container text-4xl text-center">
            {post.title.length ? post.title[0].text : ''}
          </h1>
          <div className="container mx-4">
            {RichText.render(post.body, linkResolver)}
          </div>
        </article>
      </DefaultLayout>
    );
  }
}