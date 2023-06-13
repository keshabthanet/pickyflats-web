import { Divider } from '@mui/material';
import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
import { CommentActivityCard } from '@/pageComponents/activities/cards/CommentActivityCard';
import { LikeActivityCard } from '@/pageComponents/activities/cards/LikeActivityCard';

const Acitivities = [
  {
    id: 1,
    title: 'New Order',
    description: 'New Order has been placed by customer',
    date: '2021-10-10',
    time: '10:00 AM',
    type: 'order',
    status: 'pending',
  },
  {
    id: 2,
    title: 'New Order',
    description: 'New Order has been placed by customer',
    date: '2021-10-10',
    time: '10:00 AM',
    type: 'order',
    status: 'pending',
  },
  {
    id: 3,
    title: 'New Order',
    description: 'New Order has been placed by customer',
    date: '2021-10-10',
    time: '10:00 AM',
    type: 'order',
    status: 'pending',
  },
  {
    id: 4,
    title: 'New Order',
    description: 'New Order has been placed by customer',
    date: '2021-10-10',
    time: '10:00 AM',
    type: 'order',
    status: 'pending',
  },
  {
    id: 5,
    title: 'New Order',
    description: 'New Order has been placed by customer',
    date: '2021-10-10',
    time: '10:00 AM',
    type: 'order',
    status: 'pending',
  },
];

const comments = [
  {
    id: 1,
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    date: '2021-10-10',
    time: '10:00 AM',
  },
  {
    id: 2,
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    date: '2021-10-10',
    time: '10:00 AM',
  },
];

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    date: '2021-10-10',
    time: '10:00 AM',
    rating: 4,
  },
  {
    id: 2,
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    date: '2021-10-10',
    time: '10:00 AM',
    rating: 4,
  },
  {
    id: 3,
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    date: '2021-10-10',
    time: '10:00 AM',
    rating: 4,
  },
];

const liked = [
  {
    id: 1,
    name: 'John Doe',
    likedOnFlat: 'Flat 1',
    likedOn: '2021-10-10',
    likedTime: '10:00 AM',
  },
  {
    id: 2,
    name: 'John Doe',
    likedOnFlat: 'Flat 2',
    likedOn: '2021-10-10',
    likedTime: '10:00 AM',
  },
  {
    id: 3,
    name: 'John Doe',
    likedOnFlat: 'Flat 3',
    likedOn: '2021-10-10',
    likedTime: '10:00 AM',
  },
  {
    id: 4,
    name: 'John Doe',
    likedOnFlat: 'Flat 4',
    likedOn: '2021-10-10',
    likedTime: '10:00 AM',
  },
  {
    id: 5,
    name: 'John Doe',
    likedOnFlat: 'Flat 5',
    likedOn: '2021-10-10',
    likedTime: '10:00 AM',
  },
];

export default function Acitivity() {
  return (
    <div className='p-4'>
      <h1 className='cursor-pointer text-2xl  font-semibold'>Activities</h1>

      <div className='mt-4 flex flex-col gap-5'>
        <CommentActivityCard />
        <LikeActivityCard />
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
Acitivity.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
