import Head from 'next/head'

function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Aerolab'}</title>

        <meta name="description" content={description || 'Aerolab'} />
        <meta name="keywords" content="Aerolab"/>
        <meta name="author" content="@Nicxes"/>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      {children}

      <style jsx global>
        {`

        `}
      </style>
    </div>
  )
}

export default Page