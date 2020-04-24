import { Component } from "react";

class PostPreview extends Component {
  render() {
    const post = this.props.post;
    return (
      <a
        href={`/blog/${post.uid}`}
        className="my-1 p-1 w-full md:w-1/2 lg:my-2 lg:p-2 lg:w-1/3 hover:border hover:shadow-2xl"
      >
        <article className="overflow-hidden rounded border"></article>
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src="https://picsum.photos/600/400/?random"
        />
        <header className="flex items-center justify-center leading-tight p-2 md:p-4">
          <h1 className="text-xl no-underline hover:underline text-black">
            {post.data.title[0].text}
          </h1>
        </header>
       </a>
    );
  }
}

export default PostPreview;