import React from "react";
import Scroll from "../../assets/images/scroll.png";
import s from "./Header.module.css"
import { Navigation } from "./navigation/Navigation";

const Header = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <div className={s.content}>
        <p className={s.title}>

          Lorem ipsum dolor sit amet consectetur
        </p>

        <p className={ s.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra

        </p>
        <img src={Scroll} className={s.scroll} />

      </div>
    </header >  );
};

export default Header;

