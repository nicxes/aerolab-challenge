import Page from '../components/page'

import Navbar from '../components/navbar'
import Header from '../components/header'
import Benefict from '../components/benefict'
import Overview from '../components/overview'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <Navbar size="36px" color="#ff7b00" position="relative"/>
        <Page title="Store | Aerolab">

          <Header/>
          <Benefict/>
          <Overview/>

        </Page>
      </>
    )
  }
}