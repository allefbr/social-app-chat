import React from "react";
import Moment from "react-moment";
import style from "./message.module.css";

const Message = ({ thumb, text, date, me }) => (
  <div className={me ? `${style.message} ${style.me}` : `${style.message}`}>
    {!me && (
      <figure className={style.avatar}>
        <img src={thumb} alt="Thumb" className={style.thumb} />
      </figure>
    )}

    <p className={style.text}>{text}</p>

    <span className={style.time}>
      <Moment format="LT">{date}</Moment>
    </span>
  </div>
);

export default Message;
