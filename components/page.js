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
        `}
      </style>
    </div>
  )
}

export default Page