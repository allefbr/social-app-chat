import React, { Component } from "react";
import {
  IconThunder,
  IconRotate,
  IconPeople,
  IconArrow,
  IconChat
} from "../../components/Icons";
import style from "./camera.module.css";
import { Link } from "react-router-dom";

class Camera extends Component {
  render() {
    return (
      <section className={style.cameraGrid}>
        <div className={style.thumb}>
          <Link to="/" className={style.back}>
            <IconArrow />
          </Link>

          <button className={`${style.button} ${style.left}`}>
            <IconThunder />
          </button>
          <button className={`${style.button} ${style.right}`}>
            <IconRotate />
          </button>
        </div>

        <footer className={style.footer}>
          <small className={`${style.time} ${style.columnFull}`}>2:15 PM</small>
          <p className={`${style.local} ${style.columnFull}`}>
            Kitazawa, Setagaya-ku, Tokyo, Japan
          </p>

          <button className={style.icon}>
            <IconPeople />
          </button>

          <span className={style.action} />

          <Link to="/" className={style.icon}>
            <IconChat />
          </Link>
        </footer>
      </section>
    );
  }
}

export default Camera;
