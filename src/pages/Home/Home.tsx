import { memo } from 'react'
import useGetUser, { type UserT } from './service/query/useGetUser';
import Form from './components/form';
import User from './components/User';

const Home = () => {
  const { data } = useGetUser()
  // console.log(data);

  return (
    <>
      <div className='container mx-auto'><Form /></div>
      <div className='container mx-auto mt-20 grid grid-cols-4 gap-3'>
        {
          data?.map((item: UserT) => (
            <User key={item.id} {...item} />
          ))
        }
      </div>

    </>
  )
}

export default memo(Home)
