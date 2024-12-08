'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import '@/lib/env';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import CanopyImage1 from '~/images/canopy-1.jpg';
import CanopyImage2 from '~/images/canopy-2.jpg';
import CanopyImage3 from '~/images/canopy-3.jpg';
import CanopyImage4 from '~/images/canopy-4.jpg';
import CanopyCrowdImage from '~/images/canopy-crowd.jpg';
import CanopyGlasses from '~/images/canopy-glasses.jpeg';
import ContactImage from '~/images/contact.png';

export default function HomePage() {
  return (
    <main>
      <section className='bg-black'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-8 text-center'>
          <h1 className='mb-4'>The Canopy</h1>
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className='rounded-xl'
                  src={CanopyImage1}
                  alt='canopy-1'
                  width={1200}
                  height={900}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='rounded-xl'
                  src={CanopyImage2}
                  alt='canopy-2'
                  width={1200}
                  height={900}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='rounded-xl'
                  src={CanopyImage3}
                  alt='canopy-3'
                  width={1200}
                  height={900}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='rounded-xl'
                  src={CanopyImage4}
                  alt='canopy-4'
                  width={1200}
                  height={900}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='rounded-xl'
                  src={CanopyCrowdImage}
                  alt='canopy-crowd'
                  width={1200}
                  height={900}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='rounded-xl'
                  src={CanopyGlasses}
                  alt='canopy-glasses'
                  width={1200}
                  height={900}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious size='icon' />
            <CarouselNext size='icon' />
          </Carousel>

          <div className='m-2 grid grid-cols-1 gap-2'></div>

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
