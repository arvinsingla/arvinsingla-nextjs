import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import config from '../public/config.json'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout name={config.name}>
      <Head>
        <title>Arvin Singla</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
