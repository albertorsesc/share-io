import axios from 'axios';
import type { NextPage } from 'next';

// interface IProps {
//   videos: {}
// }

const Home: NextPage = ({ videos }) => {
  console.log(videos);

  return (
    <div className='text-teal-400 text-xl'>
      ShareIO
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    }
  }
}

export default Home
