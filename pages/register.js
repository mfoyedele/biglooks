import React, { useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import image from '/assets';
import Link from 'next/link';

const index = () => {
  const router = useRouter();
  let [username, setUsername] = React.useState('');
  let [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='mt-4 py-8 px-6 text-center'>
          <div class='flex justify-center'>
            <Image src={image.logo} width={150} height={150} alt='logo' />
          </div>
          <p>Please enter the required credentials.</p>
        </div>
        <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <div>
            <form class='mb-0 space-y-6' action='#' method='POST'>
              <div>
                <label
                  for='email'
                  class='block text-sm font-medium text-gray-700'
                >
                  NAME
                </label>
                <div class='mt-1'>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='on'
                    type='text'
                    id='name'
                    name='name'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>
              <div>
                <label
                  for='email'
                  class='block text-sm font-medium text-gray-700'
                >
                  EMAIL
                </label>
                <div class='mt-1'>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='on'
                    type='email'
                    id='email'
                    name='email'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>
              <div>
                <label
                  for='email'
                  class='block text-sm font-medium text-gray-700'
                >
                  METER NUMBER
                </label>
                <div class='mt-1'>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='on'
                    type='number'
                    id='meter'
                    name='meter'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>
              <div>
                <label
                  for='email'
                  class='block text-sm font-medium text-gray-700'
                >
                  PHONE NUMBER
                </label>
                <div class='mt-1'>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='on'
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='234-012-345-6789'
                    pattern='[0-9] {3}-[0-9] {3}-[0-9] {3}-[0-9] {4}'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>
              <div>
                <label
                  for='password'
                  class='flex text-sm font-medium text-gray-700'
                >
                  PASSWORD
                </label>

                <div class='mt-1'>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    id='password'
                    name='password'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>
              <button
                type='submit'
                onClick={handleSubmit}
                class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Register
              </button>
            </form>
            <div>
              <p class='mt-1 w-full text-center py-2 px-4'>
                Already have an account?
                <Link href={{ pathname: '/' }}>
                  <span class='text-blue-500 hover:text-blue-600 px-1'>
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
