import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Carousel from '@/components/carousel'
import styles from '@/components/carousel.module.css'
import Testimonials from '@/components/Testimonials'
import { motion } from 'framer-motion'
import surf01 from '../../public/images/surf/surf_01.jpg'
import wedding01 from '../../public/images/wedding/wedding_01.jpg'
import food01 from '../../public/images/food/food_01.jpg'
import property03 from '../../public/images/properties/property-03.jpg'

const TOP_IMAGES = [surf01, wedding01, food01, property03]

export default function Home() {
  const meta = {
    title: 'Bali on Indi | Photographer | Home',
    description: 'Photography & Video | Surf | Food | Wedding | Real Estate',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <main className='px-2'>
        <section id='hero' className='flex flex-col items-center'>
          <div className='flex flex-col'>
            <motion.h1
              initial={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 1.5 }}
              animate={{ opacity: 1 }}
              className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pb-2 pt-3 text-center text-3xl font-extrabold text-transparent'
            >
              Capturing
            </motion.h1>
            <motion.h2
              className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text py-2 text-center text-2xl font-extrabold text-transparent'
              initial={{ opacity: 0 }}
              transition={{ delay: 1.25, duration: 1.5 }}
              animate={{ opacity: 1 }}
            >
              Bali&apos;s Essence
            </motion.h2>
            <motion.h2
              className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text py-2 text-center text-2xl font-extrabold text-transparent'
              initial={{ opacity: 0 }}
              transition={{ delay: 2.25, duration: 1.5 }}
              animate={{ opacity: 1 }}
            >
              A Photographic Journey
            </motion.h2>
          </div>

          <div className='my-5 flex flex-col items-center justify-between px-2'>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 3, duration: 4 }}
              animate={{ opacity: 1 }}
            >
              <Carousel>
                {TOP_IMAGES.map((src, i) => {
                  return (
                    <div key={i} className={`${styles.embla__slide} h-64`}>
                      <Image
                        src={src}
                        className='h-full rounded-lg object-cover shadow-lg'
                        alt='surf-shots'
                        priority
                        quality={100}
                      />
                    </div>
                  )
                })}
              </Carousel>
            </motion.div>

            <hr className='mx-5 my-2 bg-slate-950' />

            <div className='mb-1 mt-5 flex flex-col items-center justify-between'>
              <motion.a
                className='w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
                href='https://api.whatsapp.com/send/?phone=628179776293&text&type=phone_number&app_absent=0'
                initial={{ opacity: 0 }}
                transition={{ delay: 4, duration: 3 }}
                animate={{ opacity: 1 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </section>

        <motion.hr
          initial={{ opacity: 0 }}
          transition={{ delay: 5, duration: 3 }}
          animate={{ opacity: 1 }}
          className='mx-5 my-5 bg-slate-950'
        />

        <section
          id='about-me-short'
          className='my-5 flex flex-col items-center justify-center'
        >
          <h2 className='mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white'>
            About me
          </h2>
          <div className='flex flex-col items-center justify-center'>
            {/* <Image
            src={indiImage}
            className={`mx-auto h-[225px] w-[225px] rounded-full object-cover shadow-lg md:h-[265px] md:w-[265px] lg:h-[325px] lg:w-[325px]`}
            alt='indi'
            quality={100}
          /> */}

            <div className='flex flex-col items-center'>
              <p className='my-3 px-2 text-center text-lg'>
                My name is Indi and I am from...
              </p>
              <Link
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
                href='/about-me'
              >
                More about me
              </Link>
            </div>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='testimonials' className='flex scroll-mt-20 flex-col'>
          <h2 className='text-center text-2xl font-bold text-slate-900 dark:text-white'>
            Testimonials
          </h2>
          <Testimonials />

          <a
            className='my-3 w-48 self-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
            href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
          >
            Book now
          </a>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='location' className='scroll-mt-20 dark:bg-slate-900'>
          <h2 className='mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white'>
            Location
          </h2>
          {/* <LocationMap /> */}
        </section>
      </main>
    </>
  )
}
