import { Avatar, Button, Divider } from '@mui/material';
import { useState } from 'react';

import { ReplyCard } from '@/features/Comment/cards/ReplyCard';
import CommentBoxCard from '@/features/Comment/cards/CommentBoxCard';

export const Comment = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div>
      <div className='flex w-full pb-5'>
        <div className='flex-grow text-2xl font-semibold'>Comments</div>
        <div className=' rounded-xl border'>
          <Button className=' bg-slate-100 capitalize'>Recent</Button>
          <Button className=' capitalize'>Popular</Button>
        </div>
        <Divider />
      </div>
      <div className='bg-white-default flex h-auto w-full gap-4'>
        <div className='flex flex-col'>
          <div className='relative flex  max-h-max w-[32px] flex-col  '>
            <Avatar src='/Akash.svg' sx={{ width: '32px', height: '32px' }} />
          </div>
          <div className='relative flex flex-grow flex-col items-center text-center '>
            <div className='mt-1 h-full w-[1px] bg-[#CBD4EC] opacity-50'></div>
          </div>
        </div>
        <div className='flex-grow '>
          <div className=''>
            <h2 className=' text-lg font-medium leading-[150%] text-[#0F0C28]'>
              Leonard Krasner
            </h2>
          </div>
          {/* actual comment */}
          <div className='mt-4'>
            <p className='text-text-secondary-default  my-2 text-sm font-medium leading-[150%]'>
              Looks like an interesting post and love how it is shot. ✨
            </p>
          </div>
          {/* reply box */}
          {/* {showReplyBox && (
            <div>
              <ReplyCard />
            </div>
          )} */}
        </div>
        <div className=''>
          <p className='text-text-secondary-default  text-sm font-medium leading-[150%]'>
            16h
          </p>
        </div>
      </div>
      <div className='my-9'>
        <CommentBoxCard />
      </div>
    </div>
  );
};
