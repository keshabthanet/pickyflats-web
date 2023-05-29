import * as React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>ffffffffffffffffffffffffff</main>
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
