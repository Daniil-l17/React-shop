import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Carzina from '../components/carzina/Carzina';
import Full from '../pages/Full/Full';

const RouterMain: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/carzina" element={<Carzina />}/>
      <Route path="/products" element={<Full />} />
      <Route path="products/:id" element={<Detail />} />
      <Route path="*" element={<Navigate to='/' replace />}  />
    </Routes>
  );
};

export default RouterMain;
