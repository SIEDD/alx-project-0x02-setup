import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">ALX Project 0x02</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/home">
                <a className="hover:text-gray-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-300">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

