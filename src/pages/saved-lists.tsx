import Image from 'next/image';
import React, { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

const SaveItems = [
  {
    id: 1,
    title: 'Flat 1',
    description: 'description 1',
    image: '/images/room3.jpg',
  },
  {
    id: 2,
    title: 'Flat  2',
    description: 'description 2',
    image: '/images/room4.jpg',
  },
  {
    id: 3,
    title: 'Flat 3',
    description: 'description 3',
    image: '/images/room1.jpg',
  },
  {
    id: 4,
    title: 'Flat4 1',
    description: 'description 1',
    image: '/images/room6.jpg',
  },
  {
    id: 5,
    title: 'Flat 4',
    description: 'description 2',
    image: '/images/room7.jpg',
  },
  {
    id: 6,
    title: 'Flat 4',
    description: 'description 3',
    image: '/images/room9.jpg',
  },
];

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState(SaveItems);
  const [save, setSave] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <div className=' p-5'>
      <div className='flex flex-col gap-4'>
        <div className=' '>
          <h1 className='text-primary-main text-2xl font-semibold'>
            Saved Items
          </h1>
          {/* we will add search box here */}

          <input
            type='text'
            className='border-primary-main mt-2 w-full rounded-md border px-5 py-2'
            placeholder='Search for saved items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <p
          className='text-primary-main text-base font-medium
        '
        >
          You can see your saved items here
        </p>
      </div>

      <div className=''>
        <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {SaveItems.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).map((item) => (
            <div
              key={item.id}
              className='relative flex flex-col gap-4 rounded-md bg-white p-5 shadow-md'
            >
              <div
                className='absolute right-2 flex cursor-pointer items-center gap-2'
                onClick={() => {
                  setSavedItems(savedItems.filter((i) => i.id !== item.id));
                  setSave(!save);
                }}
              >
                <BsFillBookmarkFill
                  className={`first-letter:text-primary-main text-2xl ${
                    save ? 'text-primary-main' : 'border-primary-main '
                  }`}
                />
                <p className='text-primary-main text-base font-medium'>Saved</p>
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='text-primary-main text-xl font-semibold'>
                  {item.title}
                </h1>
                <p className='text-primary-light text-base font-medium'>
                  {item.description}
                </p>
              </div>
              <div className=' relative flex h-40 w-full cursor-pointer overflow-hidden rounded-md'>
                <Image fill src={item.image} alt='' className=' object-cover' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
SavedPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
