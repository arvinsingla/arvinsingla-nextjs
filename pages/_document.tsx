import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../public/config.json'

class MyDocument extends Document {
  render() {
    return (
      <Html>
         <Head>
          <meta name="description" content={config.tagLine} />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="author" content={config.name} />
          {/* <!-- Twitter --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={config.tagLine} />
          <meta name="twitter:image:src" content={`${config.url}/images/arvin-avatar.jpg`} />
          <meta name="twitter:creator" content={config.twitterUsername} />
          <meta name="twitter:url" content={config.twitterUrl} />
          <meta name="twitter:title" content={config.name} />
          {/* <!-- Facebook --> */}
          <meta property="og:url" content={config.url} />
          <meta property="og:title" content={config.name} />
          <meta property="og:description" content={config.tagLine} />
          <meta property="og:image" content={`${config.url}/images/arvin-avatar.jpg`} />
          {/* <!-- Font --> */}
          <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument