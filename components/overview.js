import Category from './overview/category'
import Product from './overview/product'

import API from '../api/aerolab'

export default class Overview extends React.Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    API.get(`products`)
      .then((res) => {
        this.setState({products: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <section className="overview">
          <div className="container">
            
            <h3 className="title">Popular Categories</h3>
            <p className="description">The most popular category in the last 24 hours.</p>

            <ul className="categories">
              <Category 
                title="Developers Tools"
                description="As a Developer you’re probably always looking to learn things and test new tools and technologies. Start working with grids right now with this HTML & CSS boilerplate, and learn how to apply."
                picture="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
              />
              <Category 
                title="Design Tools"
                description="As a Developer you’re probably always looking to learn things and test new tools and technologies. Start working with grids right now with this HTML & CSS boilerplate, and learn how to apply."
                picture="https://images.unsplash.com/photo-1550867428-138aec9fce23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              />
              <Category 
                title="Random"
                description="As a Developer you’re probably always looking to learn things and test new tools and technologies. Start working with grids right now with this HTML & CSS boilerplate, and learn how to apply."
                picture="https://images.unsplash.com/photo-1461748659110-16121c049d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
            </ul>

          </div>
        </section>

        <section className="overview products">
          <div className="container">

            <h3 className="title">Popular Products</h3>
            <p className="description">The most popular products in the last 24 hours.</p>

            <ul className="products">
              {this.state.products.slice(0, 8).map(product => 
                <Product
                  key={product._id}
                  id={product._id}
                  title={product.name}
                  category={product.category}
                  description="As a Developer you’re probably always looking to learn things and test new tools and technologies."
                  picture={product.img.url}
                  picture_hd={product.img.hdUrl}
                  price={product.cost}
                  bits={this.props.bits}
                />
              )}
            </ul>

            <div className="show-more">
              <a href="/">Mostrar más (más de 2000)</a>
            </div>
            
          </div>
        </section>

        <style jsx>{`
          .overview {
            position: relative;
            padding: 30px 0;
          }
          .overview.products {background: #f8f9fa;}
          .title {
            font-size: 28px;
            font-weight: 600;
            margin: 0;
          }
          .description {
            font-weight: 300;
            margin: 5px 0 30px 0;
          }
          .show-more {text-align: center;}
          .show-more a {
            color: #ff7b00;
            font-weight: 600;
          }
          .show-more a:hover {text-decoration: underline;}
          ul {
            display: grid;
            grid-template-columns: repeat(10, 100%);
            column-gap: 10px;

            margin: 0 -20px;
            padding: 0 20px;
            overflow: auto;
          }
          ul.products {
            overflow: hidden;
            grid-template-columns: repeat(1,1fr);
          }
          @media only screen and (min-width: 769px) {
            .overview {padding: 50px 0;}
            .show-more {text-align: left;}
            ul {
              margin: 0;
              padding: 0;

              grid-template-columns: 1fr 1fr 1fr;
              column-gap: 20px;
              overflow: hidden;
            }
            ul.products {grid-template-columns: repeat(4, 1fr);}
          }

        `}</style>
      </>
    )
  }
}