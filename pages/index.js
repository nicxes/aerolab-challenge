import Page from '../components/page'

import Navbar from '../components/navbar'
import Header from '../components/header'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <Navbar size="36px" color="#ff7b00" position="fixed"/>
        <Page title="Rewards | Aerolab">
          <Header/>
        </Page>
      </>
    )
  }
}