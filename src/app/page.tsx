'use client';

import { Hammer } from 'lucide-react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <section className='bg-dark'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Servants of the Secret Fire</h1>
          <p className='mt-2 text-sm'>you shall not pass, etc.</p>

          <ButtonLink variant='outline' className='my-10' href='/canopy'>
            Canopy page
          </ButtonLink>

          <Hammer size='6em' />
          <p className='mt-2'>Currently under construction!</p>

          <UnderlineLink className='mt-2' href='/components'>
            Component library
          </UnderlineLink>
        </div>
      </section>
    </main>
  );
}
