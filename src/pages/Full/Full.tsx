import {FC} from 'react'
import { useFullFavoritesQuery } from '../../api/apiShop'
import HomeHeader from '../Home/HomeHeader/HomeHeader'
import style from './../../components/products/product.module.scss';
import Products from '../../components/products/Products';
import { Link } from 'react-router-dom';

const Full:FC = () => {
  const {data,isLoading} = useFullFavoritesQuery(null)
  return (
    <div>
      <HomeHeader/>
      <section className={style.sect}>
      <h1 className="text-violet-900">The most popular</h1>
      <div className="flex mt-5 gap-8 flex-wrap justify-center">
        {isLoading ?<div className="spinner-block">
          <div className="spinner spinner-1"></div>
        </div> : data ? data.map(el => 
                <Products key={el.id} el={el} />
        ) : <div>error 404</div> }
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link to='/products'>
        <button className={style.btn}>See more</button>
        </Link>
      </div>
    </section>
    </div>
  )
}

export default Full