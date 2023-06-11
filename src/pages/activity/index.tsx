import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

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

      <Divider className='mt-1 ' />

      {/* here we will create acitivity page different sections */}

      <div className='mt-4'>
        <h1 className='text-xl font-semibold'>Bookings</h1>
        <Divider className='mt-1 ' />

        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Today</h1>

          {Acitivities.map((activity) => (
            <div
              key={activity.id}
              className='mt-2 flex items-center justify-between'
            >
              <div className='flex items-center'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
                  <i className='fas fa-shopping-cart text-2xl text-gray-500'></i>
                </div>
                <div className='ml-2'>
                  <h1 className='text-sm font-semibold'>{activity.title}</h1>
                  <p className='text-xs text-gray-500'>
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='text-xs text-gray-500'>{activity.date}</p>
                <p className='ml-2 text-xs text-gray-500'>{activity.time}</p>
              </div>
            </div>
          ))}
          <Divider className='mt-1 ' />

          <h1 className='mt-4 text-lg font-semibold'>Yesterday</h1>

          {Acitivities.map((activity) => (
            <div
              key={activity.id}
              className='mt-2 flex items-center justify-between'
            >
              <div className='flex items-center'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
                  <i className='fas fa-shopping-cart text-2xl text-gray-500'></i>
                </div>
                <div className='ml-2'>
                  <h1 className='text-sm font-semibold'>{activity.title}</h1>
                  <p className='text-xs text-gray-500'>
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='text-xs text-gray-500'>{activity.date}</p>
                <p className='ml-2 text-xs text-gray-500'>{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* here we will be the actvities about the comments section */}

      <div className='mt-4'>
        <h1 className='text-xl font-semibold'>Comments</h1>
        <Divider className='mt-1 ' />

        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Today</h1>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className='mt-2 flex items-center justify-between'
            >
              <div className='flex items-center'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
                  <i className='fas fa-shopping-cart text-2xl text-gray-500'></i>
                </div>
                <div className='ml-2'>
                  <h1 className='text-sm font-semibold'>{comment.name}</h1>
                  <p className='text-xs text-gray-500'>{comment.comment}</p>

                  <div className='flex items-center'>
                    <p className='text-xs text-gray-500'>{comment.date}</p>
                    <p className='ml-2 text-xs text-gray-500'>{comment.time}</p>

                    <div className='ml-2'>
                      <button className='text-xs text-blue-500'>Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <h1 className='text-xl font-semibold'>Reviews</h1>
        <Divider className='mt-1 ' />

        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Today</h1>

          {reviews.map((review) => {
            return (
              <div key={review.id}>
                <div className='mt-2 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
                      <i className='fas fa-shopping-cart text-2xl text-gray-500'></i>
                    </div>
                    <div className='ml-2'>
                      <h1 className='text-sm font-semibold'>{review.name}</h1>
                      <Rating value={review.rating} />
                      <p className='text-xs text-gray-500'>{review.comment}</p>

                      <div className='flex items-center'>
                        <p className='text-xs text-gray-500'>{review.date}</p>
                        <p className='ml-2 text-xs text-gray-500'>
                          {review.time}
                        </p>

                        <div className='ml-2'>
                          <button className='text-xs text-blue-500'>
                            Reply
                          </button>
                        </div>

                        <div className='ml-2'>
                          <button className='text-xs text-blue-500'>
                            Delete
                          </button>
                        </div>

                        <div className='ml-2'>
                          <button className='text-xs text-blue-500'>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='mt-4'>
        {/* here we will add the no of likes sections for different items or flats*/}

        <h1 className='text-xl font-semibold'>Likes</h1>
        <Divider className='mt-1 ' />

        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Today</h1>

          {liked.map((like) => (
            <div
              key={like.id}
              className='mt-2 flex cursor-pointer items-center justify-between hover:bg-gray-100'
            >
              <div className='flex items-center'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
                  <i className='fas fa-shopping-cart text-2xl text-gray-500'></i>
                </div>

                <div className='ml-2'>
                  <div className='flex  items-center gap-2 '>
                    <h1 className='text-sm font-semibold'>{like.name}</h1>
                    <p className='text-xs font-normal text-gray-500'>
                      liked your
                    </p>
                    <p className='text-xs font-medium text-gray-500'>
                      {like.likedOnFlat}
                    </p>
                  </div>

                  <div className='flex items-center'>
                    <p className='text-xs text-gray-500'>{like.likedOn}</p>
                    <p className='ml-2 text-xs text-gray-500'>
                      {like.likedTime}
                    </p>
                  </div>
                </div>

                <div className='ml-2'>
                  <button className='text-xs text-blue-500'>Reach Out</button>
                </div>
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
Acitivity.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
