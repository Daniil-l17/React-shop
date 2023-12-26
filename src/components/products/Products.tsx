import { FC, useContext } from 'react';
import { useDispatch } from 'react-redux';
import style from './product.module.scss';
import { actions } from '../../redux/addSlice';
import { useAppSelector } from '../../redux/hooks/hoksuseTi';
import { Link } from 'react-router-dom';
import { IFavorites } from '../../api/api.interface';
import { Context } from '../../main';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '../button/Button';

interface prod {
  el: IFavorites;
}

const Products: FC<prod> = ({ el }) => {
  const db = useDispatch();
  const dat = useAppSelector(state => state.favoriteMainaAdd.favorites);
  const isEssier = dat.some(e => e.id === el.id);

  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <>
      <div className={style.it}>
        <div
          className={style.item}
          style={{
            backgroundImage: `url(./../../../src/components/products/img/${el.imageUrl})`,
            height: 180,
          }}
        ></div>
        <div className={style.infglo}>
          <p>{el.title}</p>
          <span>{el.info}</span>
          <div className={style.fts}>
            <h6>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(el.price)}
            </h6>
            <h4>19 people purchased</h4>
          </div>
          <div className={style.bt}>
            {user ? (
              <button
                className={isEssier ? style.red : style.ffs}
                onClick={() => db(actions.addFavorites(el))}
              >
                {isEssier ? 'remove' : 'add'}
              </button>
            ) : (
              <Button />
            )}
            <Link to={`/products/${el.id}`}>
              <button className={style.jg}>more detailed</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
