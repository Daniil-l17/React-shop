import { FC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDetailFavoriteQuery } from '../../api/apiShop';
import style from './detail.module.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/addSlice';
import { useAppSelector } from '../../redux/hooks/hoksuseTi';
import New from '../../components/new/New';
import { Context } from '../../main';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '../../components/button/Button';
import Looding from '../../components/looding/Looding';

interface aid {
  id: string;
}

const Detail: FC = () => {
  const { id }: aid | any = useParams();
  const { data, isLoading } = useDetailFavoriteQuery(id);
  const db = useDispatch();
  const state = useAppSelector(state => state.favoriteMainaAdd.favorites);
  const isExsict = state.some(e => e.id === data?.id);
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <>
      <section className={style.detail}>
        {isLoading ? (
          <Looding/>
        ) : data?.id ? (
          <div className={style.mai}>
            <div
              className={style.norep}
              style={{
                backgroundImage: `url(./../../../src/components/products/img/${data?.imageUrl})`,
                width: 1250,
                height: 450,
              }}
            ></div>
            <div className={style.right}>
              <h1>{data.title}</h1>
              <p>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(data.price)}
              </p>
              <span>{data?.info}</span>
              <h6>{data?.infoDetail}</h6>
              <div className={style.btnfooter}>
                {user ? (
                  <button
                    className={isExsict ? style.red : style.active}
                    onClick={() => db(actions.addFavorites(data))}
                  >
                    {isExsict ? 'Remove cart' : 'Add to cart'}
                  </button>
                ) : (
                  <Button />
                )}
                <Link to={'/products'}>
                  <button className={style.active}>Back</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center font-semibold text-3xl ">
            Товара не найдено
          </div>
        )}
      </section>
      <New />
    </>
  );
};

export default Detail;
