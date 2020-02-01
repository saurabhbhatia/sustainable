import Link from 'next/link';
import { getBlogPostsAPI } from '../api';
// We create this in just a tick
import { linkResolver } from '../helpers';
import DefaultLayout from '../layouts';

const Index = ({ posts = [] }) => (
    <DefaultLayout>
      <h2>Recent Blog Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link
              as={linkResolver(post)}
              href={`/blogPost?slug=${post.uid}`}
              passHref
            >
              <a>{post.data.title[0].text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
  
  Index.getInitialProps = async () => {
    // Here we call the API and request 5 documents
    const response = await getBlogPostsAPI({ pageSize: 5 });
    return {
      posts: response.results
    };
  };
  
  export default Index;