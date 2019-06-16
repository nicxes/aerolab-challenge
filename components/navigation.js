import Link from 'next/link'

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
            transition: all 0.2s ease-in;
          }
          .navigation.open {
            height: calc(100% - 71px);
            opacity: 1;
          }
        `}</style>
      </nav>
    )
  }
}