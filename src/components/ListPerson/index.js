import React from "react";
import Person from "../../components/Person";

import { Link } from "react-router-dom";

const ListPerson = ({ items }) => (
  <ul>
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
