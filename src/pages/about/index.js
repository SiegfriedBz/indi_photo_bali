import Image from 'next/image'
import Head from 'next/head'
import Carousel from '../../components/carousel'
import styles from '../../components/carousel.module.css'

const images = []

const About = () => {
  const meta = {
    title: 'Bali Indi | Photographer | About me',
    description: 'Discover My Story',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <div id='about-me' className='justify-bewteen flex flex-col items-center'>
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold dark:text-white'>
            About me
          </span>
        </div>

        <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />

        <div className='mx-2'>
          <Carousel>
            {images?.map((src, i) => {
              return (
                <div key={i} className={`${styles.embla__slide} h-52`}>
                  <Image
                    src={src}
                    alt='Indi'
                    className='h-full rounded-lg object-cover shadow-2xl'
                    priority={i <= 2}
                    quality={100}
                  />
                </div>
              )
            })}
          </Carousel>
        </div>

        <hr className='mx-5 my-2 bg-slate-950' />

        <p className='my-3 px-2 text-justify'>
          My name is Indi and I am from ... Krui, South Sumatra. I started
          surfing at the age of 8 and came to Bali in 2019 to work as a surf
          instructor at Batu Bolong Beach in Canggu.
        </p>
        <p className='my-3 px-2 text-justify'>
          Batu Bolong is an easy place to learn surfing as a beginner but is
          also good for intermediate surfers.
        </p>
        <p className='my-3 px-2 text-justify'>
          I really love surfing and want to share my experience, knowledge and
          stoke of surfing with you. It is a lot of fun. Come join me and
          let&apos;s enjoy the waves and make you reach your goals in surfing!
        </p>

        <a
          className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
        >
          Contact me
        </a>
      </div>
    </>
  )
}

export default About
