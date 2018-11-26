import React from "react";
import style from "./search.module.css";

import { IconClose } from "../Icons";

const SearchForm = ({ handleCloseForm, handleFilter }) => (
  <div className={style.wrapper}>
    <button type="button" className={style.close} onClick={handleCloseForm}>
      <IconClose />
    </button>
    <input
      type="text"
      name="search"
      className={style.input}
      placeholder="Buscar por contatos"
      onChange={handleFilter}
      autoComplete="off"
    />
  </div>
);

export default SearchForm;
