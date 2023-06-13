import { Button, IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { IoTimeSharp } from 'react-icons/io5';
import { TbMessageCircle2Filled } from 'react-icons/tb';

import { timeAgo } from '@/lib/date';

import { createConversation } from '@/database/conversation';
import { TourRequest } from '@/database/tourRequests';
import { AllFlatTypes } from '@/datas/flatTypes';

export default function TourRequestCard({ data }: { data: TourRequest }) {
  const flatType = AllFlatTypes.find(
    (i) => i.id === data?.listing.flatTypes[0]
  );

  const handleMessage = async () => {
    // message logic
    // create conversation first... .
    // then open message with conver
    const conversation = await createConversation({
      participants: [data.userID, data.sellerID],
      chatStarter: data.sellerID,
    });
    console.log('conversation?', conversation);
    // delete/update status of reqeust on message
  };

  const handleAcceptRequest = () => {
    // accept login
  };

  return (
    <div className='flex min-h-[200px] w-[500px] flex-col rounded-md bg-slate-100 p-5 text-center shadow-md max-sm:w-full'>
      <div className='flex-grow'>
        <h2 className=' text-xl font-semibold'>
          {data.user.name} Has Requested For Tour
        </h2>
        <p className=' mt-3 text-sm text-[#6f7174]'>{data.note}</p>
        <p className=' mt-3 text-sm text-[#6f7174]'>
          <span className='relative '>
            <IconButton>
              <IoTimeSharp />
            </IconButton>
          </span>
          {timeAgo(new Date(data.$createdAt), { suffix: true })}
        </p>
      </div>

      <div className='my-3 h-auto w-full rounded-lg  bg-slate-900 py-3 text-black'>
        <h2 className=' py-3 font-semibold text-white'>
          <Link href={`/flats/${data.listing.$id}`}>
            {flatType?.label} Flat for sale in {data.listing?.flatCity},{' '}
            {data?.listing?.flatCountry}
          </Link>
        </h2>
        <div className=' flex px-3 text-left '>
          <div className='flex-grow'>
            <span className='rounded-xl border-[2px] bg-black px-3 py-1 text-sm text-white'>
              {flatType?.label}
            </span>
            {/* //!FUTURE -  */}
            {/* <span className='rounded-xl border-[2px] bg-black px-3 py-1 text-sm text-white'>
              luxury flat
            </span> */}
          </div>
          <div>
            <span className='text-lg font-bold text-white'>
              {data?.listing?.costs?.currency}{' '}
              {data?.listing?.costs?.monthlyCost}
            </span>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='flex-grow text-left'>
          <Button
            onClick={handleMessage}
            startIcon={<TbMessageCircle2Filled className=' mt-[-4px]' />}
          >
            Message
          </Button>
        </div>
        <Button onClick={handleAcceptRequest}>Accept Request</Button>
      </div>
    </div>
  );
}
