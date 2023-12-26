import {FC} from 'react'
import style from '../home.module.scss';
import { Link } from 'react-router-dom';
const HomeHeader:FC = () => {
  return (
    <main className={style.mn}>
    <h1>BIG SALE 20%</h1>
    <div className="flex justify-between">
      <div style={{ rowGap: 90 }} className="flex flex-col">
        <div className={style.inf}>
          <h2>the bestseller of 2022</h2>
          <h3>
            LENNON r2d2 <br /> with NVIDIA 5090 TI
          </h3>
          <Link to='/products'>
          <button>Shop Now</button>
          </Link>
        </div>
        <div style={{ columnGap: 50 }} className='flex'>
          <a target='_blank' href="https://legacy.reactjs.org/docs/getting-started.html?url=https%3A%2F%2Freactjs.org%2Fdocs%2Fgetting-started.html">
          <p>Help</p>
          </a>
          <a target='_blank' href="https://e-kontur.ru/enquiry/1376/rules_online_shops">
          <p>Terms & Conditions</p>
          </a>
        </div>
      </div>
      <div>
        <img
          src="./image 1.png"
          width={600}
          alt=""
        />
      </div>
    </div>
  </main>
  )
}

export default HomeHeader