import { Component } from "react";

class PostPreview extends Component {
  render() {
    const post = this.props.post;
    return (
      <a
        href={`/blog/${post.uid}`}
        className="my-1 p-1 w-full md:w-1/2 lg:my-2 lg:p-2 lg:w-1/3 hover:border hover:shadow-2xl"
      >
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={post.data.previewimage.url}
        />
        <div className="flex items-center leading-tight py-2 md:py-4">
          <h1 className="text-xl no-underline hover:underline text-black">
            {post.data.title[0].text}
          </h1>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://picsum.photos/600/400/?random"
            alt="Avatar of Anuja Sethi"
          />
          <div className="text-lg">
            <p className="text-gray-900 leading-none">
              <span className="text-bold">Author: </span>Anuja Sethi
            </p>
            <p className="text-gray-600">
              <span className="text-bold">Posted: </span>20 Aug 18
            </p>
          </div>
        </div>
        <br/>
        <div className="flex items-center">
            {post.data.subtitle.length > 0 ? (
              <p className="font-body text-xl">{post.data.subtitle[0].text}</p>
            ) : null}
          </div>
      </a>
    );
  }
}

export default PostPreview;
