import React from "react";
import { Link } from "react-router-dom";
import style from "./chat.module.css";

import { IconCamera, IconArrowRight } from "../Icons";

const ChatForm = () => (
  <form className={style.wrapper}>
    <Link to="/camera" className={style.icon}>
      <IconCamera />
    </Link>

    <input
      type="text"
      className={style.input}
      placeholder="Type your message..."
    />

    <button className={`${style.icon} ${style.send}`}>
      <IconArrowRight />
    </button>
  </form>
);

export default ChatForm;
