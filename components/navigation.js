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
          @media only screen and (min-width: 769px) {
            .navigation {display: none;}
          }
        `}</style>
      </nav>
    )
  }
}