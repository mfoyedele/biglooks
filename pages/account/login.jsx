import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Image from 'next/image';
import image from '/assets';
import axios from 'axios';

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default Login;

function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = ({ username, password }) => {
    const userData = {
      username: data.username,
      password: data.password,
    };

    axios
      .post(
        'https://639a3f4b16b0fdad77584051.mockapi.io/api/v3/users',
        userData,
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log('server responded');
        } else if (error.request) {
          console.log('network error');
        } else {
          console.log(error);
        }
      });
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch(alertService.error);
  };

  return (
    <Layout>
      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='mt-4 py-8 px-6 text-center'>
          <div class='flex justify-center'>
            <Image src={image.logo} width={150} height={150} alt='logo' />
          </div>
          <p>Please enter your credentials to login.</p>
        </div>
        <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <div>
            <form class='mb-0 space-y-6' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  for='username'
                  class='block text-sm font-medium text-gray-700'
                >
                  USERNAME
                </label>
                <div class='mt-1'>
                  <input
                    name='username'
                    type='text'
                    value={data.username}
                    onChange={handleChange}
                    {...register('username')}
                    className={`form-control ${
                      errors.username ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900'
                  />
                </div>

                <div>{errors.username?.message}</div>
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
                    name='password'
                    type='password'
                    // value={data.password}
                    onChange={handleChange}
                    {...register('password')}
                    className={`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900'
                  />
                </div>
                <div className='invalid-feedback'>
                  {errors.password?.message}
                </div>
              </div>
              <button
                type='submit'
                disabled={formState.isSubmitting}
                class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-900 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900'
              >
                {formState.isSubmitting && (
                  <span className='spinner-border spinner-border-sm mr-1'></span>
                )}
                Sign in
              </button>
              <div>
                <p class='mt-1 w-full text-center py-2 px-4'>
                  Don't have an account?
                  <Link href='/account/register'>
                    <span class='text-sky-900 hover:text-sky-900 px-1'>
                      Register
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
