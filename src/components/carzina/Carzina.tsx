import { FC, useContext } from 'react';
import { useAppSelector } from '../../redux/hooks/hoksuseTi';
import style from './carzina.module.scss';
import CarzinaAtimation from './CarzinaAtimation';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/addSlice';
import { BsBasket2Fill } from 'react-icons/bs';
import { Context } from '../../main';
import { useAuthState } from 'react-firebase-hooks/auth';
import Looding from '../looding/Looding';
const Carzina: FC = () => {
  const { favorites } = useAppSelector(state => state.favoriteMainaAdd);
  const db = useDispatch();
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <section className={style.cars}>
        <h1>Your cart</h1>
        <div className={style.flexs}>
          {loading ? (
            <Looding/>
          ) : !user ? (
            <div className="w-full items-center flex justify-center">
              <h1 className=" text-5xl text-center text-red-600">Register</h1>
            </div>
          ) : favorites.length ? (
            favorites.map(e => (
              <div key={e.id} className={style.tov}>
                <div
                  className={style.imd}
                  style={{
                    backgroundImage: `url(${e.imageUrl})`,
                    height: 200,
                  }}
                ></div>
                <div className={style.inf}>
                  <h1>{e.title}</h1>
                  <p>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(e.price)}
                  </p>
                  <h6>{e.info}</h6>
                  <button
                    onClick={() => db(actions.addFavorites(e))}
                    className={style.rem}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{ width: '100%' }}
              className="flex justify-center items-center flex-col"
            >
              <h4 className={style.glav}>There are no products</h4>
              <a href="/" className={style.sss}>
                <BsBasket2Fill />
              </a>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-5">
          <button onClick={() => db(actions.clearFavorites())} className={style.btr}>Clear</button>
        </div>
      </section>
      <CarzinaAtimation />
    </>
  );
};

export default Carzina;
