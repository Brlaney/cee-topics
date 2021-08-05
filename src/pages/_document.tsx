import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css"
            rel="stylesheet"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
