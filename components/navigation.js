import Link from 'next/link'

import IconSales from './icons/sales'
import IconCloth from './icons/clothes'
import IconTech from './icons/tech'
import IconArt from './icons/art'
import IconRandom from './icons/random'

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className={this.props.open ? "navigation open": "navigation"}>
        <div className="container">
          
          <h5 className="title">Explore</h5>
          <ul className="explore">
            <li>
              <Link href="/#">
                <a>
                  <div className="btn">
                    <IconSales size="35" color="#ff7b00"/>
                    <span>Discounts</span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/#">
                <a>
                  <div className="btn">
                    <IconCloth size="35" color="#ff7b00"/>
                    <span>Appareal</span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/#">
                <a>
                  <div className="btn">
                    <IconTech size="35" color="#ff7b00"/>
                    <span>Tech</span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/#">
                <a>
                  <div className="btn">
                    <IconArt size="35" color="#ff7b00"/>
                    <span>Art</span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/#">
                <a>
                  <div className="btn">
                    <IconRandom size="35" color="#ff7b00"/>
                    <span>Random</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>

        </div>
        <style jsx>{`
          .navigation {
            position: fixed;
            top: 71px;
            left: 0;
            right: 0;
            z-index: 998;

            height: 0;
            width: 100%;

            background: #fff;
            opacity: 0;
            transition: all 0.2s ease-in;

            visibility: hidden;
          }
          .navigation.open {
            height: calc(100% - 71px);
            opacity: 1;

            visibility: visible;
          }
          .title {
            color: #838383;
            font-size: 15px;
            font-weight: 600;

            margin: 25px 0 5px 0;
          }
          .explore {
            padding: 0;
            margin: 25px 0;

            display: grid;
            grid-template-columns: repeat(10,25%);
            justify-items: center;
            align-items: center;
            text-align: center;

            overflow: auto;
          }
          .explore li {list-style: none;}
          .explore li a {
            color: #838383;
            font-size: 15px;
            font-weight: 400;
          }
          .explore span {
            display: block;
            margin: 5px 0 0 0;
          }
          @media only screen and (min-width: 769px) {
            .navigation {display: none;}
          }
        `}</style>
      </nav>
    )
  }
}