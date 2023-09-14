import RootLayout from '@/components/layouts/RootLayout'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import generateSocialImage from '../utils/generateSocialImage'

const socialImageConf = generateSocialImage({
  title: 'Bali on Indi Photographer',
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  imagePublicID: 'og_social_bali_indi',
})

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout
  return (
    <RootLayout socialImageConf={socialImageConf}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootLayout>
  )
}

const EmptyLayout = ({ children }) => {
  return <>{children}</>
}
