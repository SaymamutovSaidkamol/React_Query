import { memo, useEffect, useRef, useState } from 'react'
import useGetUser, { type UserT } from './service/query/useGetUser';
import Form from './components/form';
import User from './components/User';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IoIosSearch } from "react-icons/io";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetUser(page)
  // console.log(data?.regions?.totalPages);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(event);

  }

  useEffect(() => {
    console.log(data);

  }, [data])

  const handleSearch = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value); // kiritilgan matn
    }

  }

  return (
    <>
      <div className='container mx-auto mt-20 flex justify-center'>
        <div className=' flex items-center bg-[#eee] rounded-[5px]'>
          <IoIosSearch className='text-[42px] px-2 cursor-pointer' />
          <input className='outline-none' type="text" placeholder='search...' />
          <button className=' h-full px-2 bg-blue-500 text-white  rounded-r-[5px] cursor-pointer' onClick={handleSearch}>Search</button>
        </div>
      </div>
      {
        isLoading ? <div>Loading...</div> : (
          <>
            <div className='container mx-auto'><Form /></div>
            <div className='container mx-auto mt-20 grid grid-cols-4 gap-3'>
              {
                //@ts-ignore
                data?.data?.map((item: UserT) => (
                  <User key={item.id} {...item} />
                ))
              }
            </div>
            <div className='container mx-auto  mt-10 flex justify-center'>
              <Stack spacing={2}>
                <Pagination count={data?.totalPages} onChange={handleChangePage} variant="outlined" />
              </Stack>
            </div>
          </>
        )
      }


    </>
  )
}

export default memo(Home)
