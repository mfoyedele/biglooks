import { Link } from 'components';
import Footer from './Footer';

export default Review;

function Review() {
  return (
    <div>
      <div class='grid grid-cols-4'>
        <div class='border-b-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white '>
          1. Order Water-Meter
        </div>
        <div class='border-r-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white '>
          2. Review Order
        </div>
        <div class='border-1-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white'>
          3. Payment Information
        </div>
        <div class='border--2 border-none bg-sky-900 w-full h-10 py-2 px-12 text-white'>
          4. Complement Order
        </div>
      </div>
      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <div>
            <div class='mb-0 space-y-6'>
              <div class='text-sm'>Transaction Summary</div>
              <div class='text-base text-center py-2 px-4'>
                You've Purchased Water!
              </div>
              <div>
                <p class='text-base text-center'>Token</p>
                <p class='text-2xl text-center'>3665-2265-5167-1516-0164</p>
              </div>
              <div>
                <p class='text-base'>Number of Units</p>
                <p class='text-2xl'>36.12</p>
              </div>
              <div>
                <p class='text-base'>Meter Number</p>
                <p class='text-2xl'>04171243127</p>
              </div>
              <div>
                <p class='text-base'>Date of Issue</p>
                <p class='text-2xl'>20/12/2022</p>
              </div>
              <Link href='/transaction'>
                <button class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-900 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900'>
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
