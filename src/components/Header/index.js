import React from "react";
import style from "./header.module.css";

const Header = ({ children }) => (
  <header className={style.wrapper}>{children}</header>
);

export default Header;
