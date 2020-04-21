import Link from "next/link";
import { getBlogPostsAPI } from "../api";
import { linkResolver } from "../helpers";
import DefaultLayout from "../layouts";
import Hero from "../components/Hero";
import PostPreview from "../components/PostPreview";

const Index = ({ posts = [] }) => (
  <DefaultLayout>
    <Hero />
    <div className="text-center text-4xl pt-8">
      <h2>Recent Blog Posts</h2>
    </div>
    <div className="container my-12 mx-auto px-4">
      <div className="flex flex-wrap -mx-1 lg:-mx-4 tiles sm:w-100">
        {posts.map((post, index) => (
          <PostPreview post={post} key={index} />
        ))}
      </div>
    </div>
  </DefaultLayout>
);

Index.getInitialProps = async context => {
  // Here we call the API and request 5 documents
  const response = await getBlogPostsAPI({ pageSize: 5 });
  return {
    posts: response.results
  };
};

export default Index;
