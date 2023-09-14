import Image from "next/image"
import Carousel from "@/components/carousel"
import styles from "@/components/carousel.module.css"
import food01 from "../../../public/images/food/food_01.jpg"
import food02 from "../../../public/images/food/food_02.jpg"
import food03 from "../../../public/images/food/food_03.jpg"
import food04 from "../../../public/images/food/food_04.jpg"

const images = [food01, food02, food03, food04]

const Food = () => {
  return (
    <div className='flex mt-3 flex-col items-center px-2'>
      <h1 className='text-3xl font-bold dark:text-white'>Food Photography</h1>
      <h2 className='text-2xl pt-3 font-bold dark:text-white'>
        Savoring Bali&apos;s Flavors
      </h2>

      <hr className='mx-5 my-2 bg-slate-950' />

      <Carousel>
        {images.map((src, i) => {
          return (
            <div key={i} className={`${styles.embla__slide} h-56`}>
              <Image
                src={src}
                className='h-full rounded-lg object-cover shadow-lg'
                alt='food-shots'
                priority
                quality={100}
              />
            </div>
          )
        })}
      </Carousel>

      <hr className='mx-5 my-2 bg-slate-950' />

      <p className='px-2 py-3 dark:text-gray-200 text-justify'>
        Embark on a culinary journey through the lens of our vibrant food
        photography. From bustling street markets to exquisite dining
        experiences, our images unveil the vibrant tapestry of flavors that
        define Balinese cuisine. Get ready to indulge your taste buds and embark
        on a flavorful adventure.
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

export default Food
