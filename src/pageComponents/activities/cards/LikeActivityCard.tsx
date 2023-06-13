import { IconButton } from '@mui/material';
import { AiTwotoneLike } from 'react-icons/ai';
import { FcComments, FcLike } from 'react-icons/fc';
import { GiScalpelStrike } from 'react-icons/gi';

export const LikeActivityCard = () => {
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
                <AiTwotoneLike className=' text-primary-main' />
              </IconButton>
            </div>
            <div className=''>
              <h2 className='text-sm font-semibold'>
                Ayush Thapa{' '}
                <strong className=' text-secondary-main'>Liked</strong> Your
                Flat
              </h2>

              <div className='flex items-center'>
                <p className='text-xs text-gray-500'>2021-10-10</p>
                <p className='ml-2 text-xs text-gray-500'>11:11 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
