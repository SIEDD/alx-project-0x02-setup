import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

interface Post {
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.title}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();

    // Return the first 10 posts as props
    return {
      props: {
        posts: data.slice(0, 10),
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);

    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;
