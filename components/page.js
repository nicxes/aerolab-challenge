import Head from 'next/head'

function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Aerolab'}</title>

        <meta name="description" content={description || 'Aerolab'} />
        <meta name="keywords" content="Aerolab"/>
        <meta name="author" content="@Nicxes"/>
        
        <meta name="theme-color" content="#0ad4fa"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap" rel="stylesheet" />

      </Head>

      {children}

      <style jsx global>
        {`
          body {
            font-family: 'Source Sans Pro', sans-serif;

            margin: 0;
          }
          .container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 20px;
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