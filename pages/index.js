import React from 'react';
import api from '../api';
import { useRouter } from 'next/router';
import Image from 'next/image';
import image from '/assets';

const index = () => {
  const router = useRouter();
  let [username, setUsername] = React.useState('');
  let [password, setPassword] = React.useState('');
  const login = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/auth', { username, password });
      router.push('/account');
    } catch (e) {
      setPassword('');
      console.log(e);
    }
  };
  return (
    <>
      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='mt-4 py-8 px-6 text-center'>
          <div class='flex justify-center'>
            <Image src={image.logo} width={150} height={150} alt='logo' />
          </div>
          <p>Please enter your credentials to login.</p>
        </div>
        <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <div>
            <form class='mb-0 space-y-6' action='#' method='POST'>
              <div>
                <label
                  for='email'
                  class='block text-sm font-medium text-gray-700'
                >
                  USERNAME
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
                  for='password'
                  class='flex items-center justify-between text-sm font-medium text-gray-700'
                >
                  PASSWORD
                  <span class='inline-block align-baseline'>
                    Forgot password?
                  </span>
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
                onClick={(e) => login(e)}
                class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Sign in
              </button>
            </form>
            <div>
              <p class='mt-1 w-full text-center py-2 px-4'>
                Don't have an account?
                <span class='text-blue-500 hover:text-blue-600'> Register</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
