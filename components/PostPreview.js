import { Component } from "react";

class PostPreview extends Component {
  render() {
    const post = this.props.post;
    return (
      <a href={`/blog/${post.uid}`}>
        <div className="max-w-sm overflow-hidden shadow-2xl m-4">
          <img
            className="w-full"
            src="https://picsum.photos/600/400/?random"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.data.title[0].text}</div>
            <p className="text-gray-700 text-body"></p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </a>
    );
  }
}

export default PostPreview;