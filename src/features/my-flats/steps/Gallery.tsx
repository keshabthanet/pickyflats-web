import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

import { Rooms } from '@/features/my-flats/gallery/Rooms';

export const Gallery = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='m-auto  h-full  w-[80%]'>
      <div className='h-auto w-full py-3 '>
        {/* <h2 className=' text-primary-main text-[30px] font-bold'>Gallerys</h2> */}
        {/* <h3 className=' text-[18px] font-semibold '>
          You Can Add Photos/Videos of Rooms/Kitchen/Bathrooms
        </h3> */}
      </div>
      <div>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='secondary'
            aria-label='secondary tabs example'
            variant='scrollable'
            allowScrollButtonsMobile
          >
            <Tab value='one' label='Rooms' />
            <Tab value='two' label='Kitchen' />
            <Tab value='three' label='Bathrooms' />
            <Tab value='four' label='Others' />
          </Tabs>
        </Box>

        <div className='h-auto w-full px-5'>
          {value == 'one' && (
            <div>
              <Rooms />
            </div>
          )}
          {value == 'two' && <div>kitchen</div>}

          {value == 'three' && <div>three</div>}

          {value == 'four' && <div>four</div>}
        </div>
      </div>
      <div className='flex h-auto w-full  flex-wrap justify-center gap-5 align-middle   '></div>
    </div>
  );
};
