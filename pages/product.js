import { withRouter } from 'next/router'

import Page from '../components/page'
import Navbar from '../components/navbar'
import Navigation from '../components/navigation'

import API from '../api/aerolab'

export default class Product extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      bits: 0,
      open: false
    }
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu(){
    this.setState({open: !this.state.open})
  }
  componentDidMount() {
    API.get(`user/me`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          bits: res.data.points
        })
      })
      .catch(err => console.log(err))
  }
  render(){
    return(
      <>
        <Navbar size="36px" color="#ff7b00" position="relative" open={this.state.open} handleMenu={this.handleMenu} bits={this.state.bits}/>
        <Navigation open={this.state.open}/>
        <Page
          title="Product Name"
          description="We're a Digital Product Agency that believes in combining user-centered design with cutting-edge technology to build products that make people happy."
        >
        </Page>
      </>
    )
  }
}
