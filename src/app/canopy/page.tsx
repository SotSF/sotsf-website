'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import '@/lib/env';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// import CanopyImage1 from '~/images/canopy-1.jpg';
import CanopyImage2 from '~/images/canopy-2.jpg';
import CanopyImage3 from '~/images/canopy-3.jpg';
import CanopyImage4 from '~/images/canopy-4.jpg';
import CanopyCrowdImage from '~/images/canopy-crowd.jpg';
import CanopyGlasses from '~/images/canopy-glasses.jpeg';
import ContactImage from '~/images/contact.png';

const galleryImages: { src: StaticImageData; alt: string }[] = [
  // { src: CanopyImage1, alt: 'The Canopy light installation glowing at night' },
  { src: CanopyImage3, alt: 'The Canopy illuminating a crowd below' },
  { src: CanopyCrowdImage, alt: 'Crowd gathered beneath the Canopy' },
  { src: CanopyImage2, alt: 'Close-up of LED patterns on the Canopy' },
  { src: CanopyGlasses, alt: 'Viewing the Canopy through diffraction glasses' },
  { src: CanopyImage4, alt: 'Wide view of the Canopy art piece' },
];

const stats = [
  { value: '16 ft', label: 'Wide' },
  { value: '14,000+', label: 'LEDs' },
  { value: 'Live & Prerecorded', label: 'Visuals' },
];

const features = [
  {
    title: 'A magnetic centerpiece',
    description: 'Delight crowds with a massive light installation.',
  },
  {
    title: 'Custom patterns',
    description:
      "You won't see anything like what the Canopy has, owing to its custom-built patterns.",
  },
  {
    title: 'Entrancingly beautiful',
    description:
      'People love getting cozy with their friends below the canopy.',
  },
];

export default function CanopyPage() {
  return (
    <main className='bg-black'>
      {/* Hero */}
      <section className='relative overflow-hidden pb-4 pt-16 md:pt-24'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.15)_0%,_transparent_60%)]'
        />
        <div className='layout relative text-center'>
          <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-400'>
            The Servants of the Secret Fire
          </p>
          <p className='mb-1 text-xs font-medium tracking-[0.2em] text-gray-400'>
            present
          </p>
          <h1 className='h0 mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent'>
            The Canopy
          </h1>
          <p className='mx-auto max-w-2xl text-base text-gray-400 md:text-lg'>
            A sixteen-foot-wide LED light installation — a mesmerizing canopy of
            color and motion built to captivate crowds and transform any space
            into something unforgettable.
          </p>

          <dl className='mt-10 grid grid-cols-3 gap-4 md:gap-8'>
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className='rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm'
              >
                <dt className='text-2xl font-bold text-primary-400 md:text-3xl'>
                  {value}
                </dt>
                <dd className='mt-1 text-xs uppercase tracking-wider text-gray-500 md:text-sm'>
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery */}
      <section className='py-12 md:py-16'>
        <div className='layout'>
          <div className='mb-8 text-center'>
            <h2 className='h2 mb-2'>Gallery</h2>
            <p className='text-gray-500'>
              Swipe through moments from the playa and beyond.
            </p>
          </div>

          <Carousel
            className='mx-auto max-w-4xl px-10 md:px-14'
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent>
              {galleryImages.map(({ src, alt }) => (
                <CarouselItem key={alt}>
                  <div className='overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10'>
                    <Image
                      className='aspect-[4/3] w-full object-cover'
                      src={src}
                      alt={alt}
                      width={1200}
                      height={900}
                      priority={src === CanopyImage2}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              size='icon'
              className='left-0 border-white/20 bg-black/60 text-white hover:bg-black/80 hover:text-primary-400'
            />
            <CarouselNext
              size='icon'
              className='right-0 border-white/20 bg-black/60 text-white hover:bg-black/80 hover:text-primary-400'
            />
          </Carousel>
        </div>
      </section>

      {/* Features */}
      <section className='border-t border-white/5 py-12 md:py-16'>
        <div className='layout'>
          <ul className='grid gap-6 md:grid-cols-3'>
            {features.map(({ title, description }) => (
              <li
                key={title}
                className='group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6 transition-colors hover:border-primary-500/30'
              >
                <h3 className='h3 mb-3 text-primary-300 transition-colors group-hover:text-primary-400'>
                  {title}
                </h3>
                <p className='text-sm leading-relaxed text-gray-400 md:text-base'>
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video */}
      <section className='border-t border-white/5 py-12 md:py-16'>
        <div className='layout'>
          <div className='mb-8 text-center'>
            <h2 className='h2 mb-2'>See It in Action</h2>
            <p className='text-gray-500'>
              Watch the Canopy come alive with light and motion.
            </p>
          </div>

          <div className='mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10'>
            <div className='relative aspect-video w-full'>
              <iframe
                className='absolute inset-0 h-full w-full'
                src='https://www.youtube.com/embed/aprDbNgFpQg'
                title='Canopy video'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='border-t border-white/5 py-12 pb-20 md:py-16 md:pb-28'>
        <div className='layout flex flex-col items-center text-center'>
          <h2 className='h2 mb-2'>Get in Touch</h2>
          <p className='mb-8 max-w-md text-gray-500'>
            Interested in bringing the Canopy to your event? Reach out to learn
            more.
          </p>
          <div className='rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl ring-1 ring-primary-500/20 backdrop-blur-sm'>
            <Image
              className='rounded-lg'
              src={ContactImage}
              alt='Contact information'
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
