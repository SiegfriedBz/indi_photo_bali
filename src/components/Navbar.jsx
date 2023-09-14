import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useColorMode } from '../hooks/useColorMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faStreetView, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import logo from '../../public/logos/logo-indy-nobg-circle.png'
import tikTokLogo from '../../public/logos/tiktok-logo.png'
import { motion } from 'framer-motion'

const brandNameVariants = {
  hidden: {
    opacity: 0,
    y: '100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.05, type: 'spring', stiffness: 80 },
  },
}

const Navbar = () => {
  const router = useRouter()
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  const isHomePage = router.asPath === '/'

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  const toggleIcon =
    colorMode === 'dark' ? (
      <FontAwesomeIcon icon={faSun} />
    ) : (
      <FontAwesomeIcon icon={faMoon} />
    )

  return (
    <header
      id='header'
      className='sticky top-0 z-50 bg-white dark:bg-slate-900 dark:text-gray-200'
    >
      <section className='mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
            <Image
              src={logo}
              alt='logo'
              width={45}
              height={45}
              className='rounded-full object-contain shadow-2xl ring-1 ring-cyan-500'
            />
          </Link>
          <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
            <motion.h1
              variants={brandNameVariants}
              // initial='hidden'
              // animate='visible'
              className='text-2xl font-extrabold text-slate-950 hover:text-slate-600 dark:text-white dark:hover:text-slate-200 md:text-3xl'
            >
              Bali on Indi
            </motion.h1>
          </Link>
        </div>

        {/* mobile */}
        <section id='mobile' className='md:hidden'>
          <div className='flex items-center'>
            <button
              onClick={toggleColorMode}
              className='me-5 mt-1 text-2xl dark:text-white'
            >
              {toggleIcon}
            </button>
            <button
              id='hamburger-button'
              className={`${
                mobileMenuIsOpen ? 'toggle-mobile-btn' : ''
              } relative h-8 w-8 rounded-2xl text-3xl`}
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              <div
                className={`absolute top-4 h-1 w-4 ${
                  !mobileMenuIsOpen ? 'animate-pulse' : ''
                } rounded bg-amber-400 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-950 before:transition-all before:duration-500 before:content-[""] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-950 after:transition-all after:duration-500 after:content-[""] before:dark:bg-white after:dark:bg-white`}
              ></div>
            </button>
          </div>
        </section>

        {/* desktop */}
        {/* <nav
          className='hidden items-center space-x-8 text-xl dark:text-white md:flex'
          aria-label='main-navigation'
        >
          <button
            onClick={toggleColorMode}
            className='text-2xl hover:opacity-90 dark:text-white'
          >
            {toggleIcon}
          </button>
          <Link href='/about-me' className='hover:opacity-90'>
            About Me
          </Link>

          <div className='hidden xl:flex xl:space-x-8'>
            <button
              onClick={() => {
                const route = isHomePage ? '#location' : '/#location'
                router.push(route)
              }}
              className='hover:opacity-90'
            >
              Visit Me
            </button>
            <Link href='/#testimonials' className='hover:opacity-90'>
              Testimonials
            </Link>
          </div>

          <Link href='/surf-photography' className='hover:opacity-90'>
            Surf Photography
          </Link>

            <Link href='/pre-wedding-photography' className='hover:opacity-90'>
              Pre-wedding Photography
            </Link>

            <Link href='/food-photography' className='hover:opacity-90'>
              Food Photography
            </Link>

            <Link href='/properties-photography' className='hover:opacity-90'>
              Properties Photography
            </Link>

            <Link href='/gallery' className=' hover:opacity-90'>
              Gallery
            </Link>


          <a href='https://goo.gl/maps/iHPokm4Q943N2f2fA'>
            <FontAwesomeIcon
              icon={faStreetView}
              className='text-4xl text-amber-400 hover:text-amber-500'
            />
          </a>
          <a href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className='text-4xl font-bold text-teal-700 hover:text-teal-500'
            />
          </a>
        </nav> */}
      </section>

      {mobileMenuIsOpen && (
        <section
          id='mobile-menu'
          className='top-50 absolute flex w-full origin-top animate-open-menu flex-col justify-center bg-slate-50 text-4xl dark:bg-slate-900 md:hidden'
          onClick={() => setMobileMenuIsOpen(false)}
        >
          <div className='flex w-full items-center justify-around pb-1 pt-5'>
            <a href='https://api.whatsapp.com/send/?phone=628179776293&text&type=phone_number&app_absent=0'>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className='text-4xl font-bold text-teal-700 hover:text-teal-500'
              />
            </a>

            <a href='https://www.instagram.com/balion_indi/'>
              <FontAwesomeIcon
                icon={faInstagram}
                className='text-4xl text-purple-600 hover:text-purple-500'
              />
            </a>

            <a href='https://www.tiktok.com/@aquamanbali'>
              <Image
                src={tikTokLogo}
                width={45}
                height={45}
                alt='tiktok-logo'
              />
            </a>

            <a href='https://www.buymeacoffee.com/balionindi'>
              <FontAwesomeIcon
                icon={faMugHot}
                className='text-4xl text-amber-400 hover:text-amber-500'
              />
            </a>
          </div>

          <nav
            className='flex min-h-screen flex-col items-center pt-6 dark:text-white'
            aria-label='mobile'
          >
            <div className='flex w-full flex-col items-center'>
              <Link
                href='/about-me'
                className='w-full py-2 text-center hover:opacity-90'
              >
                About Me
              </Link>

              <button
                onClick={() => {
                  const route = isHomePage ? '#location' : '/#location'
                  router.push(route)
                }}
                className='py-2 hover:opacity-90'
              >
                Contact
              </button>

              <Link
                href='/#testimonials'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Testimonials
              </Link>

              <Link
                href='/surf-photography'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Surf
              </Link>

              <Link
                href='/wedding-photography'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Pre-Wedding
              </Link>

              <Link
                href='/food-photography'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Food
              </Link>

              <Link
                href='/properties-photography'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Properties
              </Link>

              <Link
                href='/gallery'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Gallery
              </Link>
            </div>
          </nav>
        </section>
      )}
    </header>
  )
}

export default Navbar
