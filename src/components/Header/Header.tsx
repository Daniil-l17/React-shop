import { FC, useContext, useState } from 'react';
import style from './header.module.scss';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { useAppSelector } from '../../redux/hooks/hoksuseTi';
import { Link } from 'react-router-dom';
import { useSearchFavoriteQuery } from '../../api/apiShop';
import { useDebounce } from '../../redux/hooks/useDebounce/debounce';
import { Context } from '../../main';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoMenuOutline } from 'react-icons/io5';
const Header: FC = () => {
  const [search, setsearch] = useState('');
  const [open, setOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const state = useAppSelector(state => state.favoriteMainaAdd.favorites);
  const totalPrice = state.reduce((ar, pr) => (ar += pr.price), 0);
  const debounce = useDebounce(search);
  
  const { data, isLoading } = useSearchFavoriteQuery(debounce, {
    skip: debounce.length < 2,
  });
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    setOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={style.hdRow}>
        <Link to="/">
          <img
            style={{ cursor: 'pointer' }}
            src="./LOGO 1.svg"
            width={120}
            alt=""
          />
        </Link>
        <div className={style.inp}>
          <IoMdSearch />
          <input
            type="text"
            value={search}
            onChange={e => setsearch(e.target.value)}
            placeholder="Search for anything..."
          />
          {search.length > 2 ? (
            <div className={style.infsa}>
              {isLoading ? (
                <div>loading.....</div>
              ) : !data?.length ? (
                <div>noy result</div>
              ) : (
                data.map(e => (
                  <Link
                    key={e.id}
                    onClick={() => setsearch('')}
                    to={`/products/${e.id}`}
                  >
                    <div className={style.gea}>
                      <div
                        className={style.adv}
                        style={{
                          backgroundImage: `url(./../../../src/components/products/img/${e.imageUrl})`,
                          width: 200,
                          height: 85,
                        }}
                      ></div>
                      <h1>{e.title}</h1>
                    </div>
                  </Link>
                ))
              )}
            </div>
          ) : null}
        </div>
        {loading ? (
          <p>loading....</p>
        ) : user ? (
          <span style={{ fontSize: 19 }}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(totalPrice)}
          </span>
        ) : (
          <span>no information</span>
        )}
        {loading ? (
          <h1>loading.....</h1>
        ) : user ? (
          <div className="flex gap-3 items-center max-[900px]:hidden">
            <div
              style={{
                backgroundImage: `url(${user.photoURL})`,
              }}
              className={style.imagesUser}
            ></div>
            <div className=" relative">
              <h1
                onClick={() => setOpen(prev => !prev)}
                className=" cursor-pointer"
              >
                {user.displayName}
              </h1>
              {open && (
                <div className=" mt-1 py-1 px-3 bg-[#191919] rounded  w-full absolute">
                  <p onClick={() => signOut(auth)}>Exit</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button onClick={login}>Register</button>
        )}
        <div className={style.shop}>
          <FaRegHeart />
          <div className="relative flex">
            <Link to="/carzina" style={{ display: 'flex', marginLeft: '25px' }}>
              <img
                src="./shop.svg"
                className="cursor-pointer relative"
                alt=""
              />
              <span style={{ cursor: 'pointer' }} className={style.sp}>
                {loading ? <p>...</p> : user ? state.length : 0}
              </span>
            </Link>
          </div>
        </div>
        <div className={style.menu}>
          {!activeMenu ? (
            <IoMenuOutline
              onClick={() => setActiveMenu(prev => !prev)}
              className="cursor-pointer"
              size={30}
            />
          ) : (
            <IoMdClose
              className="cursor-pointer"
              onClick={() => setActiveMenu(prev => !prev)}
              size={30}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
