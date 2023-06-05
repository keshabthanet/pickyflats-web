import Modal from '@/components/Modal';

import { IoCloseOutline } from 'react-icons/io5';
import IconButton from '@mui/material/IconButton';
import { Button, Divider } from '@mui/material';

import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';

import { useState } from 'react';

interface Iprops {
  isOpen: boolean;
  onClose: () => void;
}

const bedroomOptions = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
  {
    label: '5',
    value: 5,
  },
  {
    label: '6',
    value: 6,
  },
  {
    label: '7',
    value: 7,
  },
  {
    label: '8',
    value: 8,
  },
];

const FlatTypeOptions = [
  {
    label: 'Apartment',
    value: 'apartment',
  },
  {
    label: 'House',
    value: 'house',
  },
  {
    label: 'Villa',
    value: 'villa',
  },
  {
    label: 'Penthouse',
    value: 'penthouse',
  },
];

const FilterModal = (props: Iprops) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);

  const [flatType, setFlatType] = useState('');

  const { isOpen, onClose } = props;

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(0);
    setBedrooms(0);
    setFlatType('');
  };

  const handleApply = () => {
    // dispatch filter action
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className='rounded-xl p-2'>
      <div className=''>
        <div className=''>
          <IconButton onClick={onClose} className='absolute left-1 top-1'>
            <IoCloseOutline className='text-[25px] ' />
          </IconButton>
          <h1 className='text-primary-main text-center text-base font-bold'>
            Filter
          </h1>
        </div>
        <Divider className='mt-4' />
        <div className='mt-2 flex flex-col gap-4 '>
          <div className='flex flex-col gap-2'>
            <h1 className='text-primary-main text-sm font-medium'>Price</h1>
            <span className='text-primary-main  text-sm font-medium'>
              Min Price
            </span>
            <Slider
              min={0}
              max={1000}
              onChange={(e, value) => setMinPrice(value as number)}
              value={minPrice}
              valueLabelDisplay='auto'
              aria-label='min price'
            />{' '}
            <span className='text-primary-main  text-sm font-medium'>
              Max Price
            </span>
            <Slider
              min={0}
              max={1000}
              onChange={(e, value) => setMaxPrice(value as number)}
              value={maxPrice}
              valueLabelDisplay='auto'
            />{' '}
            <div className='flex gap-2'>
              <input
                placeholder='Min'
                value={minPrice}
                onChange={(e) => setMinPrice(parseInt(e.target.value))}
                className='border-primary-main rounded-md border-2 p-2'
              />
              <input
                type='text'
                placeholder='Max'
                className='border-primary-main rounded-md border-2 p-2'
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
            </div>
            <Divider className='mt-4' />
            <div className=' gap-2'>
              <h1 className='text-primary-main text-sm font-normal'>
                Bedrooms
              </h1>
              <div className='mt-2'>
                {bedroomOptions.map((item, index) => (
                  <Chip
                    onClick={() => setBedrooms(item.value)}
                    key={index}
                    label={item.label}
                    variant='outlined'
                    className={`mx-2 px-2 py-1 ${
                      bedrooms === item.value
                        ? 'bg-primary-main text-white'
                        : 'text-primary-main bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <Divider className='mt-4' />
            <div className=' gap-2'>
              <h1 className='text-primary-main text-sm font-normal'>
                Bathrooms
              </h1>
              <div className='mt-2'>
                {bedroomOptions.map((item, index) => (
                  <Chip
                    onClick={() => setBedrooms(item.value)}
                    key={index}
                    label={item.label}
                    variant='outlined'
                    className={`mx-2 px-2 py-1 ${
                      bedrooms === item.value
                        ? 'bg-primary-main text-white'
                        : 'text-primary-main bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <Divider className='mt-4' />
            <div className=' gap-2'>
              <h1 className='text-primary-main nt-2 text-sm font-normal'>
                Flat Type
              </h1>

              <div className='mt-2 grid grid-cols-2 gap-4'>
                {
                  // here we will use reactangular box to select the property type

                  FlatTypeOptions.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setFlatType(item.value)}
                        className={` cursor-pointer rounded-md px-3 py-2 ${
                          flatType === item.value
                            ? 'bg-primary-main text-white '
                            : 'text-primary-main border-primary-main border bg-white'
                        }`}
                      >
                        {item.label}{' '}
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <Divider className='mt-4' />
            <div className='flex justify-end gap-2'>
              <Button
                className='text-primary-main bg-white'
                variant='outlined'
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                className='bg-primary-main text-white'
                variant='contained'
                onClick={handleApply}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
