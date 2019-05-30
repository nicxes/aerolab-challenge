import Navbar from '../components/navbar'
import Page from '../components/page'

function Home() {
  return (
    <>
      <Navbar/>
      <Page title="Hello World">
        <h1>Hello World</h1>
      </Page>
    </>
  )
}

export default Home;