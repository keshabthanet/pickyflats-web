import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineTune } from 'react-icons/md';

import FlatTypeSelectorOptions from '@/features/home/FlatTypeSelectorOptions';

import FilterModal from '../Filter';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  // comment
  return (
    <div className=' flex h-[85vh] w-full flex-col text-center'>
      {/* <div>top filters</div> */}
      <div className=' flex flex-grow flex-col justify-center align-middle'></div>
      <div className='h-[100px] flex-shrink'>
        <div className=' m-auto flex h-[50px] w-[80%] gap-2 md:w-[50%] '>
          <InputBase
            type='text'
            placeholder='What is in your mind?'
            startAdornment={
              <FiSearch className='text-primary-main mx-3 cursor-pointer text-[25px] ' />
            }
            className='hover:border-primary-main h-[50px] w-full  rounded-[25px] border-[2px] text-[18px] text-white '
          />
          <div
            className=' flex cursor-pointer items-center rounded-2xl border-2 border-white px-2 py-1'
            onClick={() => setOpenModal(true)}
          >
            <p className='text-white'>Filter</p>
            <MdOutlineTune className='cursor-pointer text-[25px] text-white' />
          </div>
        </div>
      </div>
      <div className='min-h-[80px] flex-shrink'>
        <FlatTypeSelectorOptions />
      </div>
      <FilterModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};
