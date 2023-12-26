import { FC, useEffect } from 'react';
import Header from '../../components/Header/Header';
import RouterMain from '../RouterMain';
import Footer from '../../components/Footer/Footer';

const App: FC = () => {


  useEffect(() => {
    window.scroll(0,0)
  },[])


  return (
    <>
      <div className='flex max-w-screen-2xl m-auto pl-6 pr-6 flex-col'>
        <Header  />
        <RouterMain/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
