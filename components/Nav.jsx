import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';
import Image from 'next/image';
import image from '/assets';

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav class='bg-gray-100'>
      <div class='max-w-5xl mx-auto border border-white'>
        <div class='flex justify-between'>
          <div class=' py-8 px-3'>
            <Image src={image.logo} width={100} height={30} alt='logo' />
            <h1>Hi {userService.userValue?.fullName}!</h1>
          </div>
          <div class='flex justify-between space-x-5 py-8 px-3'>
            <NavLink href='/'>Buy Meter</NavLink>
            <div>Transaction History</div>
            <div>Contact | </div>
            <a onClick={logout} class='test-sky-900 font-bold'>
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* <div>mobile</div> */}
    </nav>
  );
}
