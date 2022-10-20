import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[130px]'>
          <Image
            className='cursor-pointer rounded-full object-cover'
            src={'https://images.unsplash.com/photo-1559766160-10d1bdcbc8c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
            width={20}
            height={20}
            alt='Video Sharing app'
            layout='responsive'
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar
