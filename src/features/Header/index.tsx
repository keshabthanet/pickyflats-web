import InputBase from '@mui/material/InputBase';
import { FiSearch } from 'react-icons/fi';

export const Header = () => {
  const tabs = [
    { active: true, text: '1BHK' },
    { active: false, text: '2BHK' },
    { active: false, text: 'PenthHouse' },
    { active: true, text: 'Duplex' },
    { active: false, text: 'Garden Apartment' },
    { active: false, text: 'Micro Apartment' },
    { active: false, text: 'Office Space' },
    { active: false, text: 'Luxury Apartment' },
  ];
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
        <div className='flex w-full flex-wrap justify-center gap-4 text-center'>
          {tabs.map((d, index) => {
            return (
              <div
                key={index}
                className={`${
                  d.active ? 'bg-[#101820]' : 'bg-primary-light'
                } flex  h-[25px] w-auto cursor-pointer flex-col justify-center rounded-[20px] px-4 text-center align-middle text-xs text-white hover:bg-[#101820] md:h-[36px] md:text-sm`}
              >
                {d.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
