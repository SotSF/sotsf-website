'use client';
import '@/lib/env';

import gate from 'public/images/gate.jpg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <section className='bg-black'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Image src={gate} alt='Speak friend and enter'></Image>
        </div>
      </section>
    </main>
  );
}
