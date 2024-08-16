'use client';
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
          <p className='mt-2 text-sm'>you shall not pass, etc</p>

          <ButtonLink className='mt-10' href='/components' variant='light'>
            See all components
          </ButtonLink>

          <footer className='absolute bottom-2'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://se.cretfi.re'>
              Servants of the Secret Fire
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
