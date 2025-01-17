import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.name}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: UserProps[] = await response.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);

    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;
