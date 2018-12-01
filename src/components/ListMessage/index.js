import React from "react";
import Message from "../../components/Message";

const ListMessages = ({ css, items }) => (
  <section className={css}>
    {items.messages.map(m => (
      <Message key={m.id} thumb={items.thumb} {...m} />
    ))}
  </section>
);

export default ListMessages;
