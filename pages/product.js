import { withRouter } from 'next/router'

import Page from '../components/page'
import Navbar from '../components/navbar'
import Navigation from '../components/navigation'

import API from '../api/aerolab'

class Product extends React.Component {
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
    console.log(this.props.router.query)
  }
  render(){
    return(
      <>
        <Navbar size="36px" color="#ff7b00" open={this.state.open} handleMenu={this.handleMenu} bits={this.state.bits}/>
        <Navigation open={this.state.open}/>
        <Page
          title={this.props.router.query.name + " | Aerolab"}
          description={this.props.router.query.description}
        >
          <div className="container">

          </div>
        </Page>
      </>
    )
  }
}

export default withRouter(Product)