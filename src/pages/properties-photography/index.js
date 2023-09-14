import Carousel from '@/components/carousel'
import Image from 'next/image'
import React from 'react'
import styles from '@/components/carousel.module.css'
import prop01 from '../../../public/images/properties/property-01.jpg'
import prop02 from '../../../public/images/properties/property-02.jpg'
import prop03 from '../../../public/images/properties/property-03.jpg'
import prop04 from '../../../public/images/properties/property-04.jpg'
import Head from 'next/head'

const images = [prop01, prop02, prop03, prop04]

const Properties = () => {
  const meta = {
    title: 'Bali on Indi | Photographer | Real Estate',
    description: 'Properties Photography | Real Estate Paradise',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <div className='mt-3 flex flex-col items-center px-2'>
        <h1 className='text-3xl font-bold dark:text-white'>
          Properties Photography
        </h1>
        <h2 className='pt-3 text-2xl font-bold dark:text-white'>
          Real Estate Paradise
        </h2>

        <hr className='mx-5 my-2 bg-slate-950' />

        <Carousel>
          {images.map((src, i) => {
            return (
              <div key={i} className={`${styles.embla__slide} h-64`}>
                <Image
                  src={src}
                  className='h-full rounded-lg object-cover shadow-lg'
                  alt='properties-shots'
                  priority
                  quality={100}
                />
              </div>
            )
          })}
        </Carousel>

        <hr className='mx-5 my-2 bg-slate-950' />

        <p className='px-2 py-3 text-justify dark:text-gray-200'>
          For those with dreams of owning a piece of paradise, our real estate
          photography captures the essence of Bali&apos;s stunning properties.
          Immerse yourself in lush greenery, luxurious villas, and tranquil
          landscapes that make Bali a haven for real estate enthusiasts.
        </p>

        <a
          className='my-5 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=628179776293&text&type=phone_number&app_absent=0'
        >
          Contact
        </a>
      </div>
    </>
  )
}

export default Properties
