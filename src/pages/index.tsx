import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

// import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            {/* <Vercel className='text-5xl' /> */}
            <h1 className='mt-4'>PickFlats</h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <footer className='absolute bottom-2 text-gray-700'>
              {new Date().getFullYear()} ©{' '}
              <UnderlineLink href='#'>PickyFlats</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
