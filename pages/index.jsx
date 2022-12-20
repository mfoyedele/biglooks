import { Link } from 'components';
import Footer from './Footer';

export default Home;

function Home() {
  return (
    <div>
      <div class='grid grid-cols-4'>
        <div class='border-b-2 border-none bg-sky-900 w-full h-10 py-2 px-12 text-white '>
          1. Order Water-Meter
        </div>
        <div class='border-r-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white '>
          2. Review Order
        </div>
        <div class='border-1-2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white'>
          3. Payment Information
        </div>
        <div class='border--2 border-none bg-gray-500 w-full h-10 py-2 px-12 text-white'>
          4. Complement Order
        </div>
      </div>
      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <div>
            <form class='mb-0 space-y-6'>
              <div>
                <label
                  for='number'
                  class='block text-sm font-medium text-gray-700'
                >
                  Meter Number
                </label>
                <div class='mt-1'>
                  <input
                    name='number'
                    type='number'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900'
                  />
                </div>
              </div>
              <div>
                <label
                  for='password'
                  class='flex items-center justify-between text-sm font-medium text-gray-700'
                >
                  State
                </label>
                <div class='mt-1'>
                  <select
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900'
                    name='state'
                    id='state'
                  >
                    <option value='' selected='selected'>
                      - Select -
                    </option>
                    <option value='Abuja FCT'>Abuja FCT</option>
                    <option value='Abia'>Abia</option>
                    <option value='Adamawa'>Adamawa</option>
                    <option value='Akwa Ibom'>Akwa Ibom</option>
                    <option value='Anambra'>Anambra</option>
                    <option value='Bauchi'>Bauchi</option>
                    <option value='Bayelsa'>Bayelsa</option>
                    <option value='Benue'>Benue</option>
                    <option value='Borno'>Borno</option>
                    <option value='Cross River'>Cross River</option>
                    <option value='Delta'>Delta</option>
                    <option value='Ebonyi'>Ebonyi</option>
                    <option value='Edo'>Edo</option>
                    <option value='Ekiti'>Ekiti</option>
                    <option value='Enugu'>Enugu</option>
                    <option value='Gombe'>Gombe</option>
                    <option value='Imo'>Imo</option>
                    <option value='Jigawa'>Jigawa</option>
                    <option value='Kaduna'>Kaduna</option>
                    <option value='Kano'>Kano</option>
                    <option value='Katsina'>Katsina</option>
                    <option value='Kebbi'>Kebbi</option>
                    <option value='Kogi'>Kogi</option>
                    <option value='Kwara'>Kwara</option>
                    <option value='Lagos'>Lagos</option>
                    <option value='Nassarawa'>Nassarawa</option>
                    <option value='Niger'>Niger</option>
                    <option value='Ogun'>Ogun</option>
                    <option value='Ondo'>Ondo</option>
                    <option value='Osun'>Osun</option>
                    <option value='Oyo'>Oyo</option>
                    <option value='Plateau'>Plateau</option>
                    <option value='Rivers'>Rivers</option>
                    <option value='Sokoto'>Sokoto</option>
                    <option value='Taraba'>Taraba</option>
                    <option value='Yobe'>Yobe</option>
                    <option value='Zamfara'>Zamfara</option>
                    <option value='Outside Nigeria'>
                      Outside Nigeria
                    </option>{' '}
                  </select>
                </div>
              </div>
              <div>
                <label
                  for='text'
                  class='block text-sm font-medium text-gray-700'
                >
                  How much electricity do you want to buy?
                </label>
                <div class='mt-1'>
                  <input
                    name='text'
                    type='text'
                    placeholder='# Enter Amount'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900'
                  />
                </div>
              </div>
              <div>
                <label
                  for='text'
                  class='block text-sm font-medium text-gray-700'
                >
                  Name (Optional)
                </label>
                <div class='mt-1'>
                  <input
                    name='text'
                    type='text'
                    required
                    class='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900'
                  />
                </div>
              </div>
              <Link href='/review'>
                <button class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-900 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900'>
                  Continue to Payment Information
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
