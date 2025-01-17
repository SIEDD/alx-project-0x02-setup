import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const Home = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPost = (title: string, content: string) => {
    const newPost = { title, content };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <Header /> 
      <div className="flex flex-col items-center justify-center space-y-6 h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>

        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-6"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPost}
        />
      </div>
    </div>
  );
};

export default Home;
