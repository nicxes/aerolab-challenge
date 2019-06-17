import { withRouter } from 'next/router'

import Page from '../components/page'
import Navbar from '../components/navbar'
import Navigation from '../components/navigation'

import IconBit from '../components/icons/bits'

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
          <section className="product">
            <div className="container">

              <aside className="aside">
                <div className="picture">
                  <img src={this.props.router.query.picture} alt={this.props.router.query.name}/>
                </div>
              </aside> 

              <article className="article">
                <h6 className="category">{this.props.router.query.category}</h6>

                <div className="metadata">
                  <h1 className="title">{this.props.router.query.name}</h1>
                  <h2 className="price">
                    <IconBit size="40" color="#ff7b00"/>
                    <span>{this.props.router.query.price}</span>
                  </h2>
                </div>

                <h5 className="subtitle">About the product</h5>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, ligula ut viverra volutpat, sapien elit convallis justo, tristique feugiat neque orci et tortor. Integer tincidunt odio a magna pellentesque, et dapibus mi egestas. Morbi volutpat varius pharetra. Proin ut ante a magna pulvinar pellentesque quis eu enim. Morbi feugiat magna mi, eget mattis elit lacinia accumsan. Nullam vel ipsum mi. Cras faucibus, odio et convallis laoreet</p>
                
                <hr/>
              </article>

            </div>
          </section>
        </Page>

        <style jsx>{`
          .product {
            margin: 50px 0;
          }
          .container {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            row-gap: 30px;
          }

          .picture img {max-width: 100%;}

          .metadata {
            display: flex;
            justify-content: space-between;

            margin: 0 0 20px 0;
          }
          .title {
            color: #222;
            font-size: 48px;

            margin: 0;
          }
          .price {
            color: #ff7b00;
            font-size: 48px;

            display: flex;
            align-items: center;
            margin: 0;
          }
          .price span {
            margin-left: 10px;
          }
          .category {
            color: #ff7b00;
            font-size: 14px;
            text-transform: uppercase;

            margin: 0;
          }
          .subtitle {
            color: #222;
            font-size: 18px;
            font-weight: 600;

            margin: 0 0 15px 0;
          }
          .text {
            color: #666;
            font-weight: 400;
            line-height: 25px;

            margin: 0 0 20px 0;
          }
          hr {
            border: 1px solid #eee;
            margin: 40px 0;
          }

          @media only screen and (min-width: 769px) {
            .container {
              grid-template-columns: 1fr 2fr;
              grid-gap: 25px;
            }
            .text {max-width: 80%;}
          }
        `}</style>
      </>
    )
  }
}

export default withRouter(Product)