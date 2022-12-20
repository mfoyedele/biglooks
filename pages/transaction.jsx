export default Transaction;
import Image from 'next/image';
import image from '/assets';

function Transaction() {
  return (
    <>
      <div>Transaction History Page</div>
      <div class='flex justify-center'>
        <Image src={image.under} alt='under construction' />
      </div>
    </>
  );
}
