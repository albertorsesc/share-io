import Link from "next/link";
import { useRouter } from "next/router";
import { topics } from "../utils/constants";


const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;

  const topicStyle = 'xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black';
  const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#FF1997]';

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        {
          topics?.map(item => (
            <Link href={`/?topic=${item.name}`} key={item.name}>
              <div className={
                topic == item.name ? activeTopicStyle : topicStyle
              }>
                <span className="font-bold text-2xl xl:text-md">
                  {item.icon}
                </span>

                <span className="font-medium text-md hidden xl:block capitalize">
                  {item.name}
                </span>
              </div>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Discover


/*
{
              !userProfile && (
                <div className='px-2 py-4 hidden xl:block'>
                  <p className='text-gray-400'>Login to like and comment on Videos</p>

                  <div className='pr-4'>
                    <button
                      onClick={() => login()}
                      className='bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997] cursor-pointer'
                    >Login with Google</button>
                    <GoogleLogin
                      onSuccess={() => {}}
                      onError={() => {}}
                      state_cookie_domain='single_host_origin'

                    />
                  </div>
                </div>
              )
            } */