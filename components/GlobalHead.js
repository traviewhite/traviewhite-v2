import Head from 'next/head'

const GlobalHead = () => (
  <Head>
    <meta charSet='UTF-8' />
    <link hrefLang='en-US' lang='en-US' />

    <meta
      name='description'
      content='A personal site for Travis White that hosts everything from current work to thoughts and ideas. Travis White is a front-end software engineer and graphic designer.'
    />

    <meta
      name='keywords'
      content='Travis White, traviswhite, traviewhite, travis, travie, white, web development, front-end, react, developer, graphic design, illustration, printmaking, printmaker, photography, art, design, freelancer'
    />
    <meta name='author' content='Travis White' />

    {/* google */}
    <meta itemprop='name' content='Travis White' />
    <meta
      itemprop='description'
      content='A personal site for Travis White that hosts everything from current work to thoughts and ideas. Travis White is a front-end software engineer and graphic designer.'
    />
    <meta
      itemprop='image'
      content='http://res.cloudinary.com/twhite/image/upload/v1611333961/traviewhite_web_2021_uro61u.jpg'
    />

    {/* facebook */}
    <meta property='og:url' content='https://traviewhite.com' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='Travis White' />
    <meta
      property='og:description'
      content='A personal site for Travis White that hosts everything from current work to thoughts and ideas. Travis White is a front-end software engineer and graphic designer.'
    />
    <meta
      property='og:image'
      content='http://res.cloudinary.com/twhite/image/upload/v1611333961/traviewhite_web_2021_uro61u.jpg'
    />

    {/* twitter */}
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content='Travis White' />
    <meta
      name='twitter:description'
      content='A personal site for Travis White that hosts everything from current work to thoughts and ideas. Travis White is a front-end software engineer and graphic designer.'
    />
    <meta
      name='twitter:image'
      content='http://res.cloudinary.com/twhite/image/upload/v1611333961/traviewhite_web_2021_uro61u.jpg'
    />

    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      rel='stylesheet'
    />
    <link href='https://fonts.googleapis.com/css2?family=Anton&display=swap' rel='stylesheet' />

    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

    <link rel='manifest' href='../favicon/site.webmanifest' />
    <link rel='apple-touch-icon' sizes='180x180' href='../favicon/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='../favicon/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='../favicon/favicon-16x16.png' />
    <link rel='manifest' href='../favicon/site.webmanifest' />
    <meta name='msapplication-TileColor' content='#da532c' />
    <meta name='theme-color' content='#131313' />
  </Head>
)

export default GlobalHead
