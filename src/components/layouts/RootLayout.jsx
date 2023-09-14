import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function RootLayout(props) {
  const { children, ...customMeta } = props

  const router = useRouter()

  const meta = {
    canonicalUrl: `https://bali-on-indi-photographer.vercel.app//${router.asPath}`,
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta name='robots' content='follow, index' />
        <meta
          name='keywords'
          content='Bali on Indi, Surf photography, Surf photos, Surf videos, Surf shots, Wedding photography, Wedding photo, Food photography, Food photo, Real estate photography, Real estate photo'
        ></meta>
        <meta
          property='og:url'
          content={`https://bali-on-indi-photographer.vercel.app/${router.asPath}`}
        />
        <link rel='canonical' href={meta.canonicalUrl} />
        <meta property='og:site_name' content='Bali on Indi Photographer' />
        <meta property='og:image' content={meta.socialImageConf} />
      </Head>

      <div className='dark:bg-slate-900 dark:text-gray-200'>
        <Navbar />
        <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />
        <main className='py-5'>{children}</main>
        <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />
        <Footer />
      </div>
    </>
  )
}
