import React, { Component } from "react";
import { RichText } from "prismic-reactjs";
import { getBlogPostAPI } from "../../api";
import DefaultLayout from "../../layouts";

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    if (!response && ctx.res) ctx.res.statusCode = 404; // Return 404 if on server no article was found
    return {
      post: response,
    };
  }

  render() {
    const post = this.props.post.data;
    console.log(post);
    if (!post) {
      return <Error statusCode={404} />; // Present adequate 404
    }
    return (
      <DefaultLayout>
        <div className="flex flex-column w-full border-b-1">
          <img className="w-full" src={post.coverimage.url}></img>
        </div>
        <article>
          <h1 className="text-5xl text-center font-headings border-b">
            {post.title.length ? post.title[0].text : ""}
          </h1>
          <div className="flex flex-column flex-start md:mx-2 sm:mx-2 font-body text-xl">
            <div className="lg:w-1/2 md:w-full sm:w-full inline-block m-0 m-auto text-justify p-8 border-l border-r shadow-xl">
              {RichText.render(post.body)}
            </div>
          </div>
        </article>
      </DefaultLayout>
    );
  }
}
