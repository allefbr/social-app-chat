import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";

import style from "./chat.module.css";

class Chat extends Component {
  render() {
    return (
      <section className={style.chatGrid}>
        <Header className={style.header}>
          <Link to="/">
            <IconArrow />
          </Link>
          <h2> Pessoa Nome </h2>
          <button type="button">
            <IconDots />
          </button>
        </Header>

        <section className={style.content}>
          <p>Sou mensage</p>
        </section>

        <footer className={style.footer}>
          <ChatForm />
        </footer>
      </section>
    );
  }
}

export default Chat;
