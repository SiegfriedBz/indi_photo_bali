import { motion } from "framer-motion"
import Image from "next/image"
import Carousel from "@/components/carousel"
import styles from "@/components/carousel.module.css"
import surf01 from "../../../public/images/surf/surf_01.jpg"
import surf02 from "../../../public/images/surf/surf_02.jpg"
import surf03 from "../../../public/images/surf/surf_03.jpg"
import surf04 from "../../../public/images/surf/surf_04.jpg"
const images = [surf01, surf02, surf03, surf04]

const Surf = () => {
  return (
    <div className='flex mt-3 flex-col items-center px-2'>
      <h1 className='text-3xl font-bold dark:text-white'>Surf Photography</h1>
      <h2 className='text-2xl pt-3 font-bold dark:text-white'>
        Riding the Waves{" "}
      </h2>

      <hr className='mx-5 my-2 bg-slate-950' />

      <Carousel>
        {images.map((src, i) => {
          return (
            <div key={i} className={`${styles.embla__slide} h-56`}>
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

      <hr className='mx-5 my-2 bg-slate-950' />

      <p className='py-3 px-2 dark:text-gray-200 text-justify'>
        Our lenses dive into the heart of Bali&apos;s surf culture, capturing
        the exhilaration of surfers as they conquer the waves. Whether
        you&apos;re riding the surf or cheering from the shore, our photography
        transports you to Bali&apos;s iconic surf spots, where the ocean&apos;s
        rhythm dances with the surfer&apos;s passion.
      </p>

      <a
        className='my-5 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
        href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
      >
        Contact
      </a>
    </div>
  )
}

export default Surf
