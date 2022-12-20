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

export default Register;

function Register() {
  const router = useRouter();

  const [data, setData] = useState({
    fullname: '',
    username: '',
    meterNumber: '',
    phoneNumber: '',
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
    fullName: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Email is required'),
    meterNumber: Yup.string().required('Meter Number is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (user) => {
    const userData = {
      fullName: data.fullname,
      username: data.username,
      meterNumber: data.meterNumber,
      phoneNumber: data.meterNumber,
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
      .register(user)
      .then(() => {
        alertService.success('Registration successful', {
          keepAfterRouteChange: true,
        });
        router.push('login');
      })
      .catch(alertService.error);
  };

  return (
    <Layout>
      <>
        <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div class='mt-4 py-4 px-6 text-center'>
            <div class='flex justify-center'>
              <Image src={image.logo} width={150} height={150} alt='logo' />
            </div>
            <p>Please enter the required credentials.</p>
          </div>
          <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
            <div>
              <form class='mb-0 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                  <label
                    for='fullName'
                    class='block text-sm font-medium text-gray-700'
                  >
                    NAME
                  </label>
                  <input
                    name='fullName'
                    type='text'
                    onChange={handleChange}
                    {...register('fullName')}
                    className={`form-control ${
                      errors.fullName ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                  <div className='invalid-feedback'>
                    {errors.fullName?.message}
                  </div>
                </div>
                <div>
                  <label
                    for='username'
                    class='block text-sm font-medium text-gray-700'
                  >
                    EMAIL
                  </label>
                  <input
                    name='username'
                    type='email'
                    onChange={handleChange}
                    {...register('username')}
                    className={`form-control ${
                      errors.username ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                  <div className='invalid-feedback'>
                    {errors.username?.message}
                  </div>
                </div>
                <div>
                  <label
                    for='meter'
                    class='block text-sm font-medium text-gray-700'
                  >
                    METER NUMBER
                  </label>
                  <input
                    name='meterNumber'
                    type='number'
                    onChange={handleChange}
                    {...register('meterNumber')}
                    className={`form-control ${
                      errors.meterNumber ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                  <div className='invalid-feedback'>
                    {errors.meterNumber?.message}
                  </div>
                </div>
                <div>
                  <label
                    for='phoneNumber'
                    class='block text-sm font-medium text-gray-700'
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    name='phoneNumber'
                    type='tel'
                    onChange={handleChange}
                    placeholder='234-012-345-6789'
                    {...register('phoneNumber')}
                    className={`form-control ${
                      errors.phoneNumber ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                  <div className='invalid-feedback'>
                    {errors.phoneNumber?.message}
                  </div>
                </div>
                <div>
                  <label
                    for='password'
                    class='flex text-sm font-medium text-gray-700'
                  >
                    PASSWORD
                  </label>
                  <input
                    name='password'
                    type='password'
                    onChange={handleChange}
                    {...register('password')}
                    className={`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                  <div className='invalid-feedback'>
                    {errors.password?.message}
                  </div>
                </div>
                <button
                  disabled={formState.isSubmitting}
                  class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                  {formState.isSubmitting && (
                    <span className='spinner-border spinner-border-sm mr-1'></span>
                  )}
                  Register
                </button>
                <div>
                  <p class='mt-1 w-full text-center py-2 px-4'>
                    Already have an account?
                    <Link href='/account/login'>
                      <span class='text-blue-500 hover:text-blue-600 px-1'>
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
