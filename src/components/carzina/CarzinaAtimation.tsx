import { FC } from 'react';
import style from './carzina.module.scss';
import { SiRedux } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiReactrouter } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
const CarzinaAtimation: FC = () => {
  return (
    <section className={style.animat}>
      <h1>Technologies</h1>
      <div className={style.texn}>
        <a
          href="https://redux-toolkit.js.org/"
          className={style.van}
          target="_blank"
        >
          <SiRedux />
        </a>
        <a href="https://react.dev/" className={style.rad} target="_blank">
          <FaReact />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          className={style.ts}
          target="_blank"
        >
          <SiTypescript />
        </a>
        <a
          href="https://learn.javascript.ru/"
          className={style.js}
          target="_blank"
        >
          <IoLogoJavascript />
        </a>
        <a
          href="https://reactrouter.com/en/main"
          className={style.dm}
          target="_blank"
        >
          <SiReactrouter />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className={style.tail}
        >
          <SiTailwindcss />
        </a>
      </div>
    </section>
  );
};

export default CarzinaAtimation;
