import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { getBlogPostAPI } from '../api';
import linkResolver from '../helpers';
import DefaultLayout from '../layouts';

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    if (!response && ctx.res) ctx.res.statusCode = 404 // Return 404 if on server no article was found
    return {
      post: response
    };
  }

  render() {
    const post = this.props.post.data;
    if (!post) {
      return <Error statusCode={404} /> // Present adequate 404
    }
    return (
      <DefaultLayout>
        <article>
          <h1 className="container text-4xl text-center font-headings">
            {post.title.length ? post.title[0].text : ''}
          </h1>
          <div className="container mx-4 font-body">
            {RichText.render(post.body, linkResolver)}
          </div>
        </article>
      </DefaultLayout>
    );
  }
}