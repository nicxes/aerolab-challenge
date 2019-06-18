import IconBit from './icons/bits'
import IconArrowDown from './icons/arrow-down'

function Filter({sortByPrice, sortByName}) {
  return (
    <>
      <section className="filter">
        <div className="container">

          <ul>
            <li onClick={sortByPrice}>
              <IconBit color="#ff7b00" size="20"/>
              <span className="text">Points</span>
              <IconArrowDown color="#a0a0a0" size="10"/>
            </li>
            <li onClick={sortByName}>
              <span className="text">A - Z</span>
              <IconArrowDown color="#a0a0a0" size="10"/>
            </li>
          </ul>

        </div>
      </section>

      <style jsx>{`
        .filter {
          position: relative;
          background-color: #fff;
          border-bottom: 1px solid #e9ebec;
        }
        .filter ul {
          padding: 0;
          margin: 0;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .filter ul li {
          list-style: none;
          font-weight: 600;

          padding: 20px 0;
          border-left: 1px solid #e9ebec;

          display: flex;
          align-items: center;
          justify-content: center;
          cursor:pointer;

          transition: all 0.2s;
        }
        .filter ul li:hover {
          background: #f4f4f4;
        }
        .filter ul li span {margin: 0 10px;}
        .filter ul li:last-child {border-right: 1px solid #e9ebec;}
      `}</style>
    </>
  )
}

export default Filter