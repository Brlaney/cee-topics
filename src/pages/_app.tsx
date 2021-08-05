import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { title, keywords, description } from '@/lib/seo'
import '@/styles/globals.scss'


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <Component {...pageProps} key={router.route} />
    </>
  )
}
