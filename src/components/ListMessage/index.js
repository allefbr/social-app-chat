import React from "react";
import Message from "../../components/Message";

import style from "./listmessage.module.css";

const ListMessages = ({ items }) => (
  <div className={style.wrap}>
    {items.messages.map(m => (
      <Message key={m.id} thumb={items.thumb} {...m} />
    ))}
  </div>
);

export default ListMessages;
