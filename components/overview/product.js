import IconBit from '../icons/bits'

export default function Product({ title, category, description, picture, bits, discount }) {
  return (
    <>
      <li className="product">
        <a href="/" target="_blank">

          <article>
            <div className="picture">
              <img src={picture} alt={title}/>
            </div>

            <div className="content">
              <h6>{category} <span className="discount">{discount}</span></h6>
              <h5>
                {title} 
                <span className="bits">
                  <IconBit size="18" color="#ff7b00"/>
                  <span className="value">{bits}</span>
                </span>
              </h5>
              <p>{description}</p>
            </div>

            <hr/>



          </article>

        </a>
      </li>

      <style jsx>{`
        .product {
          position: relative;
          list-style: none;
        }
        .product .picture {
          position: relative;
          padding-bottom: 65%;
        }
        .product .picture img {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;

          border-radius: 5px;
          object-fit: cover;
        }
        .product .picture .overlay {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 1;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .product h3 {
          color: #fff;
          font-size: 38px;
          font-weight: bold;
          text-shadow: rgba(0, 0, 0, 1) 0px 0px 20px;
        }
        .product h5 {
          color: #222;
          font-size: 20px;
          font-weight: 600;

          margin: 5px 0 5px 0;
        }
        .product h6 {
          color: #ff7b00;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          margin: 15px 0 5px 0;
        }
        .product p {
          color: #333;
          font-size: 15px;
          font-weight: 400;

          margin: 0 0;
        }
        .product hr {
          border: 1.2px dashed rgba(0,0,0,0.1);
          margin: 20px 0 40px 0;
        }
        
        .bits {
          color: #ff7b00;
          font-size: 20px;
          font-weight: bold;

          display: flex;
          align-items: center;
          float: right;
        }
        .bits .value {margin-left: 5px;}
        .discount {
          color: #222;
          font-size: 14px;
          font-weight: 600;

          float: right;
        }
      `}</style>
    </>
  )
}