import React from "react";
import s from "./styles.module.css";
import logo from "./img/diary_120704.svg";

export const Logo = ({ clName }) => {
  return (
    <a href="/" className={clName ? clName : s.logo}>
      <img src={logo} alt="logo" className={s.logo} />
      <h3 className={s.text}>Posts</h3>
    </a>
  );
};
