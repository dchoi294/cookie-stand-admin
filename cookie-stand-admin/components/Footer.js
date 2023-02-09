import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='p-4 mt-8 bg-green-400 text-black-50'>
      <Link href='/careers'>© 2023</Link>
    </footer>
  );
}
