import InputBase from '@mui/material/InputBase';
import { FiSearch } from 'react-icons/fi';

import FlatTypeSelectorOptions from '@/features/home/FlatTypeSelectorOptions';

export const Header = () => {
  // comment
  return (
    <div className=' flex h-[85vh] w-full flex-col text-center'>
      {/* <div>top filters</div> */}
      <div className=' flex flex-grow flex-col justify-center align-middle'></div>
      <div className='h-[100px] flex-shrink'>
        <div className=' m-auto h-[50px] w-[80%] md:w-[50%] '>
          <InputBase
            type='text'
            placeholder='What is in your mind?'
            startAdornment={
              <FiSearch className='text-primary-main mx-3 cursor-pointer text-[25px] ' />
            }
            className='hover:border-primary-main h-[50px] w-full  rounded-[25px] border-[2px] text-[18px] text-white '
          />
        </div>
      </div>
      <div className='min-h-[80px] flex-shrink'>
        <FlatTypeSelectorOptions />
      </div>
    </div>
  );
};
