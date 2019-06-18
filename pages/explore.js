import Page from '../components/page'

import Navbar from '../components/navbar'
import Navigation from '../components/navigation'
import Intro from '../components/intro'
import Filter from '../components/filter'
import Product from '../components/product'

import API from '../api/aerolab'

export default class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      bits: 0,
      open: false,
      products: [],
      search: "",
      sortPrice: false,
      sortName: false
    }
    this.handleMenu = this.handleMenu.bind(this)
    this.sortByPrice = this.sortByPrice.bind(this)
    this.sortByName = this.sortByName.bind(this)
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
      
    API.get(`products`)
      .then((res) => {
        this.setState({products: res.data})
      })
      .catch(err => console.log(err))
  }
  handleMenu(){
    this.setState({open: !this.state.open})
  }
  sortByPrice() {
    this.setState({
      products: this.state.products.sort(
        this.state.sortPrice === false
          ? (a, b) => (a.cost - b.cost)
          : (a, b) => (b.cost - a.cost)
      ),
      sortPrice: !this.state.sortPrice
    })
  }
  sortByName() {
    this.setState({
      products: this.state.products.sort(
        this.state.sortName === false
          ? (a, b) => (a.name < b.name)
          : (a, b) => (b.name > a.name)
      ),
      sortName: !this.state.sortName
    })
  }
  render () {
    return (
      <>
        <Navbar size="36px" color="#ff7b00" open={this.state.open} handleMenu={this.handleMenu} bits={this.state.bits}/>
        <Navigation open={this.state.open}/>
        <Page
          title="Store | Aerolab"
          description="We're a Digital Product Agency that believes in combining user-centered design with cutting-edge technology to build products that make people happy.">
          
          <Intro InputChange={text => this.setState({search: text})}/>
          <Filter sortByPrice={this.sortByPrice} sortByName={this.sortByName}/>

          <section className="products">
            <div className="container">

              <ul>
                {this.state.products.filter(product => 
                  product.name.toLowerCase().includes(this.state.search.toLowerCase())
                  ).map(product => 
                  <Product
                    key={product._id}
                    id={product._id}
                    title={product.name}
                    category={product.category}
                    description="As a Developer you’re probably always looking to learn things and test new tools and technologies."
                    picture={product.img.url}
                    picture_hd={product.img.hdUrl}
                    price={product.cost}
                    bits={this.state.bits}
                  />
                )}
              </ul>

            </div>
          </section>
        
        </Page>
        
        <style jsx global>{`
          body {
            overflow: ${this.state.open ? "hidden": "auto"}
          }
        `}</style>

        <style jsx>{`
          .products {
            position: relative;
            background: #f8f9fa;
            padding: 30px 0;
          }
          ul {
            display: grid;
            grid-template-columns: repeat(10, 100%);
            column-gap: 10px;

            margin: 0 -20px;
            padding: 0 20px;

            overflow: hidden;
            grid-template-columns: repeat(1,1fr);
          }
          @media only screen and (min-width: 769px) {
            .products {padding: 50px 0;}
            ul {
              margin: 0;
              padding: 0;

              grid-template-columns: 1fr 1fr 1fr;
              column-gap: 20px;
              overflow: hidden;
            }
            ul {grid-template-columns: repeat(4, 1fr);}
          }
        `}</style>
      </>
    )
  }
}