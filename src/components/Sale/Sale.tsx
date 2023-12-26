import {FC} from 'react'
import style from './sale.module.scss'
const Sale:FC = () => {
  return (
    <section className={style.sales}>
      <div className={style.salseleft}>
        <h1>NEW YEAR</h1>
        <h2>SALE</h2>
        <button>See more</button>
        <img className={style.im1} src="./cross.png" alt="" />
        <img className={style.im2} src="./image 3.png" alt="" />
      </div>
      <div className={style.rights}>
        <div className={style.rel}>
        <h1>save up to <span>50%</span> off</h1>
        </div>
      </div>
    </section>
  )
}

export default Sale