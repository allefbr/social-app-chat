import React from "react";
import style from "./search.module.css";

import { IconClose } from "../Icons";

const SearchForm = ({ handleCloseForm }) => (
  <form className={style.wrapper}>
    <button type="button" className={style.close} onClick={handleCloseForm}>
      <IconClose />
    </button>
    <input
      type="text"
      className={style.input}
      placeholder="Buscar por contatos"
    />
  </form>
);

export default SearchForm;
