import IconTruck from './icons/truck'
import IconPackage from './icons/package'
import IconAcademy from './icons/academy'

export default function Benefict() {
  return (
    <section className="benefit">
      <div className="container">
        <ul>

          <li>
            <div className="icon">
              <IconTruck size="40" color="#ff7b00"/>
            </div>
            <div className="content">
              <h5>Free standard shipping</h5>
              <p>Enjoy free shipping on orders over $19.99</p>
            </div>
          </li>

          <li>
            <div className="icon">
              <IconPackage size="40" color="#ff7b00"/>
            </div>
            <div className="content">
              <h5>30-day return policy</h5>
              <p>Return your order within 30 days. No questions asked.</p>
            </div>
          </li>

          <li>
            <div className="icon">
              <IconAcademy size="40" color="#ff7b00"/>
            </div>
            <div className="content">
              <h5>Exclusive member benefits</h5>
              <p>Sign up to unlock membership pricing. Tell me more.</p>
            </div>
          </li>

        </ul>
      </div>

      <style jsx>{`
        .benefit {
          position: relative;
          border-bottom: 1px solid #e9ebec;
        }
        .benefit ul {
          padding: 20px 0;
          margin: 0;
            
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px;
        }
        .benefit ul li {
          list-style: none;

          display: flex;
          align-items: center;
        }
        .benefit .icon {margin-right: 20px;}

        .benefit h5 {
          font-size: 16px;
          margin: 0;
        }
        .benefit p {
          color: #838383;
          font-size: 14px;
          margin: 0;
        }
        @media only screen and (max-width: 768px) {
          .benefit ul {
            grid-template-columns: 1fr;
            padding: 30px 0;
          }
          .benefit ul li {grid-row: 20px;}
        }
      `}</style>
    </section>
  )
}