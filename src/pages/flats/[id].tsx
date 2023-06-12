import { Button, Divider, IconButton } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { FcLikePlaceholder } from 'react-icons/fc';
import { RiShareForwardFill } from 'react-icons/ri';

import { fetchListingById } from '@/database/listing';
import { AllFlatTypes } from '@/datas/flatTypes';

import { useFlatStore } from '@/store/flatStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import { Comment } from '@/features/Comment';
import { NavBar } from '@/features/layout/NavBar';
import { ImageCard } from '@/features/my-flats/cards/ImageCard';
import { AllAmenities } from '@/pageComponents/flats/AllAmenities';
import { Costs } from '@/pageComponents/flats/Costs';
import { GalleryModal } from '@/pageComponents/flats/GalleryModal';
import { Policies } from '@/pageComponents/flats/Policies';

import { Listing } from '@/types/listing';

const Map = dynamic(() => import('@/features/map/MapView'), {
  ssr: false,
});

export const DetailView = () => {
  const {
    query: { id },
    push,
  } = useRouter();
  const { openSnackbar } = useSnackbarStore();
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState<Listing>();
  const { gallery, buildingAmenities } = useFlatStore();

  const [bgImage, setBgImage] = useState('');

  const [imgType, setImgType] = useState<
    'room' | 'bathroom' | 'kitchen' | 'other' | ''
  >('');

  useEffect(() => {
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * gallery.length);
      const randomImage = gallery[randomIndex]?.photos[0] ?? 0;
      setBgImage(`${randomImage}`);
    };

    changeBackgroundImage();

    const interval = setInterval(changeBackgroundImage, 7000);

    return () => clearInterval(interval);
  }, [gallery]);

  const fetchFlatData = async () => {
    try {
      // con
      const flatData = await fetchListingById(id);
      setListing(flatData);
    } catch (error) {
      console.log('?  erro ? ', error);
      openSnackbar('Failed to query for request flat', 'error');
      // push('/');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchFlatData();
  }, [id]);

  const flatType = AllFlatTypes.find((i) => i.id === listing?.flatTypes[0]);

  return (
    <div className='h-auto w-full'>
      <div>
        <NavBar />
      </div>
      <div className=' relative h-[86vh] w-full overflow-y-scroll  px-3 md:px-9'>
        <div className=' flex   '>
          <div className='hidden min-w-[350px] max-w-[350px] md:block'></div>
          <div className=' flex-grow py-5'>
            <h1 className=' text-primary-main text-xl font-semibold md:text-3xl'>
              {flatType?.label} Flat for sale in {listing?.flatCity},{' '}
              {listing?.flatCountry}
            </h1>

            <div className='flex flex-grow font-semibold md:hidden'>
              <span className='flex-grow'>$30,000</span>{' '}
              <span>
                <Button>Request A Tour</Button>
              </span>
            </div>

            <div className='flex flex-row-reverse'>
              <IconButton>
                <FaRegBookmark className='  relative m-auto ' />
              </IconButton>
              <IconButton>
                <RiShareForwardFill />
              </IconButton>
              <IconButton>
                <FcLikePlaceholder />
              </IconButton>
            </div>
          </div>
        </div>

        <div className='sticky top-0 z-10  flex bg-white pl-2 pt-1 md:pl-5'>
          <div className='sticky top-0 md:min-w-[350px] md:max-w-[350px]'></div>
          <div className='relative flex flex-wrap gap-3 py-1'>
            <Link href='#gallery'>
              {' '}
              <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
                Gallery
              </div>
            </Link>
            <Link href='#amenities'>
              <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
                Amenities
              </div>
            </Link>
            <Link href='#policies'>
              {' '}
              <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
                Policies
              </div>
            </Link>
            <Link href='#costs'>
              {' '}
              <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
                Costs
              </div>
            </Link>

            <Link href='#location'>
              {' '}
              <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
                Location
              </div>
            </Link>

            <Link href='#comment'>
              {' '}
              <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
                Comments
              </div>
            </Link>
          </div>
        </div>
        <div className='flex w-full '>
          <div className='sticky top-0 z-50 hidden min-w-[350px] max-w-[350px] shadow-lg md:block '>
            <div className='fixed top-[80px]  z-50 h-[80vh] w-[350px] p-5 pr-12 '>
              <div className='relative z-50 flex h-full w-full flex-col rounded-md bg-[#74f574] p-5'>
                <div className=' flex text-xl text-white'>
                  <div className='flex-grow font-semibold'>
                    {listing?.costs?.currency} {listing?.costs?.monthlyCost}
                  </div>
                  <div className=' rounded-[20px] border-[2px] bg-black px-4 py-1 text-center text-sm'>
                    Rent
                  </div>
                </div>
                <div className=' flex-grow'>
                  <h2 className=' text-primary-main text-lg font-semibold'>
                    Location Info:
                  </h2>
                  <Divider />
                  <h3 className='text-lg font-medium text-blue-950'>
                    {listing?.flatCity}, {listing?.flatCountry}
                  </h3>
                  <h4 className='text-lg font-medium text-blue-950'>
                    {listing?.flatStreet1}
                  </h4>

                  <div className='flex flex-wrap gap-1'>
                    <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                      {listing?.room} Rooms
                    </div>
                    <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                      {listing?.kitchen} Kitchen
                    </div>

                    <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                      {listing?.bathroom} bathroom
                    </div>

                    <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                      {listing?.costs?.negotiable}
                    </div>
                  </div>
                </div>
                <div>
                  <Button variant='contained'>Request A Tour</Button>
                </div>
              </div>
            </div>
          </div>

          <div className='min-h-[1100px] flex-grow md:pl-5 '>
            {/* gallery part */}
            <div className='relative h-[70vh] w-full ' id='gallery'>
              <div className='relative mt-5 h-full w-full '>
                <ImageCard fileID={bgImage} />
                <div className='absolute bottom-0 right-0 border'>
                  <GalleryModal src={bgImage} totalImgs={gallery.length} />
                </div>
              </div>
            </div>

            <section className='h-auto w-full pt-2' id='amenities'>
              <AllAmenities
                buildingAmenities={listing?.buildingAmenities}
                flatAmenities={listing?.flatAmenities}
              />
            </section>
            <section id='policies' className='pt-2'>
              <Policies flatPolicies={listing?.flatPolicies} />
            </section>
            <section id='costs'>
              <Costs costs={listing?.costs} />
            </section>
            <section className='relative z-0' id='location'>
              <Map />
            </section>
            <section id='comment'>
              <Comment />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
