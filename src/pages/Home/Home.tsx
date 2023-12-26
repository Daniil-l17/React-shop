import { FC } from 'react';
import Product from '../../components/products/Product';
import Sale from '../../components/Sale/Sale';
import HomeHeader from './HomeHeader/HomeHeader';

const Home: FC = () => {
  return (
    <>
      <HomeHeader/>
      <Product/>
    <Sale/>
    </>
  );
};

export default Home;
