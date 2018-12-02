import React from "react";
import Person from "../../components/Person";

import { Link } from "react-router-dom";

import style from "./listperson.module.css";

const ListPerson = ({ items }) => (
  <ul className={style.wrap}>
    {items.map(person => (
      <li key={person.id}>
        <Link to={`/chat/${person.id}`}>
          <Person {...person} />
        </Link>
      </li>
    ))}
  </ul>
);

export default ListPerson;
