import { Link, useLoaderData } from 'remix';
import { getPosts } from '~/post';

type PostType = { slug: string, title: string, };

export const loader = () => getPosts();

const Posts = () => {
  const posts = useLoaderData<PostType[]>();

  return (
    <div>
      <h1>posts</h1>
      <p>はろーわーるど！</p>
      <h2>ポスト一覧でーす</h2>
      <ul>
        {posts.map(post => (
          <li>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;