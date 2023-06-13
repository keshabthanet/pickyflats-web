import { IconButton } from '@mui/material';
import { FcComments } from 'react-icons/fc';

export const CommentActivityCard = () => {
  return (
    <div>
      <div className=''>
        <div className=' rounded-xl bg-red-50 p-5'>
          <div className='flex '>
            <div className='flex-grow'>
              <h3>4BHK flat on sale in sukedhara , Lalitpur</h3>
            </div>
            <div>
              <span className=' text-secondary-main font-semibold'>
                $60,000
              </span>
            </div>
          </div>

          <div className='flex  gap-3 '>
            <div className='flex  w-8  rounded-full'>
              <IconButton className=' relative top-[-11px]'>
                <FcComments />
              </IconButton>
            </div>
            <div className=''>
              <h2 className='text-sm font-semibold'>Ayush Thapa</h2>
              <p className='text-xs text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum
              </p>

              <div className='flex items-center'>
                <p className='text-xs text-gray-500'>2021-10-10</p>
                <p className='ml-2 text-xs text-gray-500'>11:11 am</p>

                <div className='ml-2'>
                  <button className='rounded-3xl px-3 py-1 text-xs text-blue-500'>
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
