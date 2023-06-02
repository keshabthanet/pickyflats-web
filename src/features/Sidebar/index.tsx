import { IconButton } from '@mui/material';
import Link from 'next/link';
import { AiFillDashboard } from 'react-icons/ai';
import { BsBuildingsFill } from 'react-icons/bs';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { TbInfoSquareRoundedFilled } from 'react-icons/tb';

const menuList = [
  { label: 'Dashboard', icon: <AiFillDashboard />, link: '/' },
  { label: 'My Flats', icon: <BsBuildingsFill />, link: '/my-flats' },
  { label: 'Saved List', icon: <BsFillBookmarkPlusFill />, link: '/saved' },
  {
    label: 'Tour Requests',
    icon: <BsFillBookmarkPlusFill />,
    link: 'tour-request',
  },

  { label: 'Explore', icon: <TbInfoSquareRoundedFilled />, link: '/explore' },
];

export const Sidebar = () => {
  return (
    <>
      <div className='h-[full] w-[300px] bg-gray-200'>
        {menuList.map((menu) => {
          return (
            <div key={menu.label} className=' h-[30px] w-full bg-slate-500'>
              <Link href={menu.link}>
                <IconButton>{menu.icon}</IconButton>
                <span>{menu.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
