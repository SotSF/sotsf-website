'use client';

import Image from 'next/image';
import '@/lib/env';

import ContactImage from '~/images/contact.png';

export default function HomePage() {
  return (
    <main>
      <section className='bg-dark'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='my-4'>The Canopy</h1>
          <iframe
            width='1200'
            height='675'
            src='https://www.youtube.com/embed/aprDbNgFpQg'
            title='Canopy video'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>

          <Image
            className='my-4'
            src={ContactImage}
            alt='contact'
            width={300}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
