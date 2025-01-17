import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header'; 
import PostCard from '@/components/common/PostCard'; 

const Posts = () => {
  const [posts, setPosts] = useState<{ title: string; body: string; userId: number }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data.slice(0, 10)); 
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

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

export default Posts;
