import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BsFillGridFill, BsMapFill } from 'react-icons/bs';

import { fetchListings } from '@/database/listings';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

import useListingsStore from '@/store/useListingsStore';

import FlatTypeSelectorOptions from '@/features/home/FlatTypeSelectorOptions';
import { SearchResults } from '@/features/SearchResults';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

const ReservationEssential = dynamic(() => import('@/features/reservation'), {
  ssr: false,
});

const ListingsMapView = dynamic(
  () => import('@/features/home/ListingsMapView'),
  { ssr: false }
);

export default function HomePage() {
  const { listings, setListings, activeTypeFilter } = useListingsStore();
  const [mapModeActive, setMapModeActive] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    // const listings = await databases.listDocuments(DATABASE_ID, LISTINGS_ID, [
    //   // ...(activeTypeFilter ? [Query.equal('type', activeTypeFilter)] : []),
    // ]);

    const listings = await fetchListings();
    setListings(listings);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchData();
  }, [activeTypeFilter]);

  // TODO: check if reserved & reservationID in params, open reserved dialog message,
  // update reservation status & payment status
  // update reserved listings to filter out from searching
  const {
    query: { reserved },
  } = useRouter();
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {/* main header part */}
      {!mapModeActive && (
        <>
          {/* <main className=' relative h-[85vh] w-full'>
            <div className='absolute h-full w-full'>
              <Video url='/videos/bg.mp4' />
            </div>
            <div className='-h-full relative z-10 w-full'>
              <Header />
            </div>
          </main> */}
          {!loading && (
            <div>
              <SearchResults listings={listings} />
            </div>
          )}
        </>
      )}

      {mapModeActive && (
        <>
          <ListingsMapView listings={listings} />
          <div className='fixed bottom-28 z-[1000] flex w-full items-center'>
            <FlatTypeSelectorOptions />
          </div>
        </>
      )}

      <div className='fixed bottom-12 z-[1000] flex w-full items-center'>
        <Button
          variant='contained'
          className='mx-auto rounded-full'
          size='large'
          onClick={() => setMapModeActive(!mapModeActive)}
          startIcon={mapModeActive ? <BsFillGridFill /> : <BsMapFill />}
        >
          Show {mapModeActive ? 'List' : 'Map'}
        </Button>
      </div>

      {reserved && <ReservationEssential />}
    </>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <MainLayout>{props.page}</MainLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'optional'
);
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};

export async function getServerSideProps() {
  // Fetch data from external API

  // const listings = await databases.listDocuments(DATABASE_ID, LISTINGS_ID);
  // console.log('getting data ... .', listings);

  // Pass data to the page via props
  return {
    props: {
      // data
    },
  };
}
