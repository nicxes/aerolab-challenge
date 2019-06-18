import Head from 'next/head'

function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Aerolab'}</title>

        <meta name="description" content={description || 'Aerolab'} />
        <meta name="keywords" content="Aerolab, Aerostore, shop, ecommerce"/>
        <meta name="author" content="@Nicxes"/>
        
        <meta name="theme-color" content="#ff7b00"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="mask-icon" href="static/images/favicon.svg" color="#ff7b00"/>
        <link rel="icon" type="image/png" href="static/images/favicon.ico"/>
        <link rel="shortcut icon" type="image/png" href="static/images/favicon.ico"/>
        <link rel="apple-touch-icon" href="static/images/apple-touch-icon.png"/>

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap" rel="stylesheet" />

      </Head>

      {children}

      <style jsx global>
        {`
          ::-moz-selection {
            color: #fff;
            background: #ff7b00;
          }
          ::selection {
            color: #fff; 
            background: #ff7b00;
          }
          body {
            color: #222;
            font-family: 'Source Sans Pro', sans-serif;
            margin: 0;
          }
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
          }
          a {
            text-decoration: none;
            transition: all 0.1s ease;
          }

          @media only screen and (max-width: 425px) {
            .hidden-mobile {
              display: none !important;
            }
          }
          @media only screen and (min-width: 426px) and (max-width: 768px) {
            .hidden-tablet {
              display: none !important;
            }
          }
          @media only screen and (min-width: 769px) {
            .hidden-desktop {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Page