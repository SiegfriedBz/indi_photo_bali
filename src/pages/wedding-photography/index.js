import Carousel from "@/components/carousel"
import Image from "next/image"
import React from "react"
import styles from "@/components/carousel.module.css"
import wedding01 from "../../../public/images/wedding/wedding_01.jpg"
import wedding02 from "../../../public/images/wedding/wedding_02.jpg"
import wedding03 from "../../../public/images/wedding/wedding_03.jpg"
import wedding04 from "../../../public/images/wedding/wedding_04.jpg"

const images_top = [wedding01, wedding03]
const images_bottom = [wedding02, wedding04]

const Wedding = () => {
  return (
    <>
      <div className='flex mt-3 flex-col items-center px-2'>
        <h1 className='text-3xl font-bold dark:text-white'>
          Pre-Wedding Photo
        </h1>
        <h2 className='text-2xl pt-3 font-bold dark:text-white'>
          Celebrating Love in Bali
        </h2>

        <hr className='mx-5 my-2 bg-slate-950' />

        <Carousel>
          {images_top.map((src, i) => {
            return (
              <div key={i} className={`${styles.embla__slide} h-56`}>
                <Image
                  src={src}
                  className='h-full rounded-lg object-contain shadow-lg'
                  alt='wedding-shots'
                  priority
                  quality={100}
                />
              </div>
            )
          })}
        </Carousel>

        <hr className='mx-5 my-3 bg-slate-950' />

        <Carousel>
          {images_bottom.map((src, i) => {
            return (
              <div key={i} className={`${styles.embla__slide}`}>
                <Image
                  src={src}
                  className='w-full max-h-[30rem] rounded-lg object-contain shadow-lg'
                  alt='wedding-shots'
                  priority
                  quality={100}
                />
              </div>
            )
          })}
        </Carousel>

        <hr className='mx-5 my-2 bg-slate-950' />

        <p className='py-3 px-2 dark:text-gray-200 text-justify'>
          Bali is the chosen canvas for love stories. Our wedding photography
          encapsulates the romance, beauty, and enchantment of Bali&apos;s
          weddings. Witness these love stories unfold against picturesque
          backdrops that make Bali an ideal destination for tying the knot.
        </p>

        <a
          className='my-5 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
        >
          Contact
        </a>
      </div>
    </>
  )
}

export default Wedding
