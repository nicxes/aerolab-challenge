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
          <header className="product-head">
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
                <div>
                  <a href="" className="btn btn-primary">Redeem now</a>
                </div>
              </article>

            </div>
          </header>

          <section className="product-section">
            <div className="container">

              <aside className="aside">
                <h3>Specifications</h3>
              </aside>
            
              <article className="article">
                <ul className="spec">
                  <li>Capacity: <span>64GB or 256GB</span></li>
                  <li>Display: <span>Retina HD display</span></li>
                  <li>Chip: <span>A11 Bionic chip</span></li>
                  <li>Camera: <span>12MP camera</span></li>
                  <li>Video Recording: <span>4K video at 60 fps</span></li>
                  <li>FaceTime HD Camera: <span>7MP camera 1080p HD</span></li>
                  <li>Touch ID: <span>Fingerprint sensor</span></li>
                  <li>Apple Pay: <span>Pay with your iPhone.</span></li>
                  <li>Siri: <span>Activate hands-free with your voice</span></li>
                  <li>Battery: <span>Up to 14 hours</span></li>
                  <li>Fast-charge capable: <span>Up to 50% charge in 30m</span></li>
                  <li>Operating System: <span>iOS 13</span></li>
                </ul>
              </article>
            
            </div>
          </section>

          <section className="product-section">
            <div className="container">

              <aside className="aside titles">
                <h3 className="subtitle">People opinion</h3>
              </aside>
            
              <article className="article">
                
              </article>
            
            </div>
          </section>

        </Page>

        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 30px;
          }

          .product-head {
            position: relative;
            margin: 50px 0;
          }
          .product-head .picture {
            text-align: center;}
          .product-head .picture img {
            max-width: 100%;
            border: 1px solid #eee;
            border-radius: 5px;
          }
          .product-head .category {
            color: #ff7b00;
            font-size: 14px;
            text-transform: uppercase;
            margin: 0;
          }
          .product-head .metadata {
            display: flex;
            justify-content: space-between;
            margin: 0 0 20px 0;
          }
          .product-head .title {
            color: #222;
            font-size: 48px;
            font-weight: bold;
            margin: 0;
          }
          .product-head .price {
            color: #ff7b00;
            font-size: 48px;
            display: flex;
            align-items: center;
            margin: 0;
          }
          .product-head .price span {margin-left: 10px;}
          .product-head .btn-primary {
            color: #fff;
            font-weight: 600;

            background: #ff7b00;
            box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
            border-radius: 5px;

            padding: 10px 30px;
          }


          .product-section {
            position: relative;
            margin: 60px 0 80px 0;
          }
          .product-section .aside h3 {
            color: #222;
            font-size: 32px;
            font-weight: 600;

            margin: 0;
          } 
          .product-section .spec {
            padding: 0;
            margin: 0;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            row-gap: 20px;
            grid-gap: 15px;
          }
          .product-section .spec li {
            color: #a0a0a0;
            font-weight: 400;
            list-style: none;
          }
          .product-section .spec li span {
            color: #222;
            font-size: 18px;

            display: block;
            margin: 5px 0 0 0;
          }


          .product-head .subtitle,
          .product-section .subtitle {
            color: #222;
            font-size: 18px;
            font-weight: 600;

            margin: 0 0 15px 0;
          }
          .product-head .text,
          .product-section .text {
            color: #666;
            font-weight: 400;
            line-height: 25px;

            margin: 0 0 40px 0;
          }
          .product-head hr,
          .product-section hr {
            border: 1px solid #eee;
            margin: 40px 0;
          }


          @media only screen and (min-width: 769px) {
            .container {
              grid-template-columns: 1fr 2fr;
              grid-gap: 25px;
            }
            .product-head .text,
            .product-section .text {max-width: 80%;}

            .product-section aside h3 {max-width: 70%;}
          }
          @media only screen and (max-width: 600px) {
            .product-head .price {
              position: absolute;
              top: -30px;
              right: 20px;
            }
            .product-head .picture img {border: 0;}
            .product-section .spec {grid-template-columns: repeat(2, 1fr);}
          }
        `}</style>
      </>
    )
  }
}

export default withRouter(Product)