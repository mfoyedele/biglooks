import React from 'react';
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div class='text-right w-full h-12 bg-sky-900 text-white py-2 px-4'>
      Copyright © {date} BIGLooks | All rights reserved
    </div>
  );
};

export default Footer;
