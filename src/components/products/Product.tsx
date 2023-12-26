import { FC } from 'react';
import style from './product.module.scss';
import Products from '../products/Products';
import { useAddFavoritesQuery } from '../../api/apiShop';
import { Link } from 'react-router-dom';
import Looding from '../looding/Looding';
const Product: FC = () => {
  const { data, isLoading } = useAddFavoritesQuery(null);
  
  return (
    <section className={style.sect}>
      <h1 className="text-violet-900">The most popular</h1>
      <div className="flex mt-5 gap-8 flex-wrap justify-center">
        {isLoading ? (
          <Looding/>  
        ) : data ? (
          data.map(el => <Products key={el.id} el={el} />)
        ) : (
          <div>error 404</div>
        )}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link to="/products">
          <button className={style.btn}>All products</button>
        </Link>
      </div>
    </section>
  );
};

export default Product;
