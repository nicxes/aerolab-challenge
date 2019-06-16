import Page from '../components/page'

import Navbar from '../components/navbar'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Benefict from '../components/benefict'
import Overview from '../components/overview'

export default class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu(){
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <>
        <Navbar size="36px" color="#ff7b00" position="relative" open={this.state.open} handleMenu={this.handleMenu}/>
        <Navigation open={this.state.open}/>
        <Page title="Store | Aerolab">

          <Header/>
          <Benefict/>
          <Overview/>

        </Page>
      </>
    )
  }
}