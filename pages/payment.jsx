import { Link } from 'components';
import Footer from './Footer';

export default Payment;

function Payment() {
  return (
    <div>
      <div class='grid grid-cols-4'>
        <div class='border-b-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white '>
          1. Order Water-Meter
        </div>
        <div class='border-r-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white '>
          2. Review Order
        </div>
        <div class='border-1-2 border-none bg-sky-900 w-full h-10 py-2 px-12 text-white'>
          3. Payment Information
        </div>
        <div class='border--2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white'>
          4. Complement Order
        </div>
      </div>
      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <div>
            <div class='mb-0 space-y-6'>
              <di class='text-sm'>Payment</di>
              <div>
                <p class='text-center'>Enter your card details to pay</p>
                <label class='block text-sm font-medium mb-1' for='card-nr'>
                  Card Number
                </label>
                <input
                  id='card-nr'
                  class='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                  type='text'
                  placeholder='1234 1234 1234 1234'
                />
              </div>

              <div class='flex space-x-4'>
                <div class='flex-1'>
                  <label
                    class='block text-sm font-medium mb-1'
                    for='card-expiry'
                  >
                    Expiry Date
                  </label>
                  <input
                    id='card-expiry'
                    class='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                    type='text'
                    placeholder='MM/YY'
                  />
                </div>
                <div class='flex-1'>
                  <label class='block text-sm font-medium mb-1' for='card-cvc'>
                    CVC
                  </label>
                  <input
                    id='card-cvc'
                    class='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                    type='text'
                    placeholder='CVC'
                  />
                </div>
              </div>

              <div>
                <label class='block text-sm font-medium mb-1' for='card-name'>
                  Name on Card
                </label>
                <input
                  id='card-name'
                  class='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                  type='text'
                  placeholder='Client Name'
                />
              </div>

              <div>
                <label class='block text-sm font-medium mb-1' for='card-email'>
                  Email
                </label>
                <input
                  id='card-email'
                  class='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                  type='email'
                  placeholder='client@gmail.com'
                />
              </div>
            </div>
          </div>
          <Link href='/order'>
            <button class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-900 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900'>
              Pay NGN 700
            </button>
          </Link>
          <div class='mt-6'>
            <div class='text-xs text-gray-800 text-center'>
              Secured by <span class='font-bold'>paystack</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
