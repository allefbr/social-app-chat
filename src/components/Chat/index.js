import React from "react";
import { Link } from "react-router-dom";
import style from "./chat.module.css";

import { IconCamera, IconArrowRight } from "../Icons";

const ChatForm = ({ handleMessage }) => (
  <form onSubmit={handleMessage} className={style.wrapper}>
    <Link to="/camera" className={style.icon}>
      <IconCamera />
    </Link>

    <input
      type="text"
      name="message"
      className={style.input}
      placeholder="Type your message..."
      autoComplete="off"
    />

    <button className={`${style.icon} ${style.send}`}>
      <IconArrowRight />
    </button>
  </form>
);

export default ChatForm;
