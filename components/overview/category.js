export default function Category({ title, description, picture}) {
  return (
    <>
      <li className="category">
        <a href="/">

          <article>
            <div className="picture">
              <img src={picture} alt={title}/>
              <div className="overlay">
                <h3>{title}</h3>
              </div>
            </div>

            <div className="content">
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </article>

        </a>
      </li>

      <style jsx>{`
        .category {
          position: relative;
          list-style: none;
        }
        .category .picture {
          position: relative;
          padding-bottom: 65%;
        }
        .category .picture img {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;

          border-radius: 5px;
          object-fit: cover;
        }
        .category .picture .overlay {
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
        .category h3 {
          color: #fff;
          font-size: 38px;
          font-weight: bold;
          text-shadow: rgba(0, 0, 0, 1) 0px 0px 20px;
        }
        .category h5 {
          color: #222;
          font-size: 20px;
          font-weight: 600;

          margin: 15px 0 5px 0;
        }
        .category p {
          color: #333;
          font-size: 15px;
          font-weight: 400;

          margin: 0;
        }
      `}</style>
    </>
  )
}