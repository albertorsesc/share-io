import { GoogleLogin, googleLogout } from '@react-oauth/google';
import Image from 'next/image';
import Link from 'next/link';
import { createOrGetUser } from '../utils';

import useAuthStore from '../store/authStore';

import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

const Navbar = () => {
  const { userProfile, addUser, removeUser }  = useAuthStore();

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
            priority
          />
        </div>
      </Link>

      <div>
        Search
      </div>

      <div>
        {
          userProfile ? (
            <div className='flex gap-5 md:gap-10'>
              <Link href='/upload'>
                <button className='border-2 px-2 md:px-4 py-1 text-md font-semibold flex items-center gap-2 rounded-lg'>
                  <IoMdAdd className='text-xl' />

                  <span className='hidden md:block'>Upload</span>
                </button>
              </Link>

              {
                userProfile.image && (
                  <Link href='/'>
                    <>
                      <Image
                        width={40}
                        height={40}
                        className='rounded-full'
                        src={userProfile.image}
                        alt='Profile photo'
                      />
                    </>
                  </Link>
                )
              }
              <button
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
                type='button'
                className='px-2'
              >
                <AiOutlineLogout color='red' fontSize={32} />
              </button>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => {}}
            />
          )
        }
      </div>

    </div>
  )
}

export default Navbar
