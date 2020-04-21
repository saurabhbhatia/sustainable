import { Component } from "react";

class PostPreview extends Component {
  render() {
    const post = this.props.post;
    return (
      <a href={`/blog/${post.uid}`} className="max-w-sm overflow-hidden shadow-lg hover:shadow-2xl m-4 border">
          <img
            className="w-full"
            src="https://picsum.photos/600/400/?random"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">{post.data.title[0].text}</div>
          </div>
      </a>
    );
  }
}

export default PostPreview;