import React, { Component } from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { getBlogPostAPI } from "../../api";
import DefaultLayout from "../../layouts";
import { DiscussionEmbed } from "disqus-react";
import SocialShare from "../../components/SocialShare";

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
    const shareUrl = "https://sustainablelife.me/post/" + post.uuid;
    const title = post.title.length ? post.title[0].text : "";
    
    if (!post) {
      return <Error statusCode={404} />; // Present adequate 404
    }
    return (
      <DefaultLayout>
        <Head>
          <title> Sustainable Life | {title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex flex-column w-full border-b">
          <img className="w-full hero-img" src={post.coverimage.url}></img>
        </div>
        <article>
          <h1 className="text-5xl text-center font-headings">
            {title}
          </h1>
          <div className="flex flex-column flex-start md:mx-2 sm:mx-2 font-body text-xl border-t">
            <div className="lg:w-1/2 md:w-full sm:w-full inline-block m-0 m-auto text-justify">
              {RichText.render(post.body)}
            </div>
          </div>
          <div className="flex flex-column flex-start justify-center my-4">
            <SocialShare
              shareUrl={shareUrl}
              title={title}
              previewImage={post.previewimage.url}
            />
          </div>
          <div className="flex flex-column flex-start">
            <DiscussionEmbed
              className="lg:w-1/2 md:w-full sm:w-full inline-block m-0 m-auto text-justify"
              shortname="sustainablelife-me"
              config={{
                url: post.uid,
                identifier: post.id,
                title: post.title[0].text,
              }}
            />
          </div>
        </article>
        <style jsx>{`
          .hero-img {
            height: intrinsic;
          }
        `}</style>
      </DefaultLayout>
    );
  }
}
