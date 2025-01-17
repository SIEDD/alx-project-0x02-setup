import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div>
      <Header /> {/* Add the Header component */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
        <h1 className="text-4xl font-bold mb-6">Welcome to the About Page</h1>

        <div className="flex space-x-4">
          {/* Using the Button component with different sizes and shapes */}
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />
          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
      </div>
    </div>
  );
};

export default About;
