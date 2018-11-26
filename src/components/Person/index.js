import React from "react";
import style from "./person.module.css";
import Moment from "react-moment";

const Person = ({ name, lastMessage, totalMessageNoRead, date, hasOn }) => (
  <div className={style.person}>
    <div className={style.infos}>
      <figure className={style.figure}>
        {hasOn && <span className={style.online} />}
      </figure>

      <div>
        <h2 className={style.title}> {name}</h2>
        <small className={style.lastMessage}>{lastMessage}</small>
      </div>
    </div>

    <div className={style.timewrapper}>
      <strong className={style.time}>
        <Moment fromNow>{date}</Moment>
      </strong>
      {totalMessageNoRead > 0 && (
        <small className={style.noread}>{totalMessageNoRead}</small>
      )}
    </div>
  </div>
);

export default Person;
