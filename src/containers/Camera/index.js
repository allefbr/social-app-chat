import React, { Component } from "react";
import {
  IconThunder,
  IconRotate,
  IconPeople,
  IconArrow,
  IconChat
} from "../../components/Icons";

import { Link } from "react-router-dom";
import style from "./camera.module.css";

class Camera extends Component {
  render() {
    const {
      cameraGrid,
      thumb,
      back,
      button,
      left,
      right,
      footer,
      footerAction,
      time,
      local,
      columnFull,
      icon,
      action
    } = style;

    return (
      <section className={cameraGrid}>
        <div className={thumb}>
          <button onClick={this.props.history.goBack} className={back}>
            <IconArrow />
          </button>

          <button className={`${button} ${left}`}>
            <IconThunder />
          </button>
          <button className={`${button} ${right}`}>
            <IconRotate />
          </button>
        </div>

        <footer className={footer}>
          <div className={footerAction}>
            <small className={`${time} ${columnFull}`}>2:15 PM</small>
            <p className={`${local} ${columnFull}`}>
              Kitazawa, Setagaya-ku, Tokyo, Japan
            </p>

            <button className={icon}>
              <IconPeople />
            </button>

            <span className={action} />

            <Link to="/" className={icon}>
              <IconChat />
            </Link>
          </div>

          {/* <div className={style.listContacts} /> */}
        </footer>
      </section>
    );
  }
}

export default Camera;
