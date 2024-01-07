import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaYoutube } from 'react-icons/fa';
import style from './footer.module.scss';
const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.ftr}>
        <img src="./../../../src/img/LOGO 1.svg" alt="" />
        <h1>React Shop</h1>
        <div style={{ columnGap: 30 }} className="flex items-center">
          <a href="https://github.com/Daniil-l17" target='_blank'>
            <FaGithub />
          </a>
          <a href="https://dev.vk.com/ru/vkmaps/map-display-services/javascript-sdk/react" target='_blank'>
            {' '}
            <SlSocialVkontakte />
          </a>
          <a href="https://www.youtube.com/watch?v=HyWYpM_S-2c&t=59s" target='_blank'>
            {' '}
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
