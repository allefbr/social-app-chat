import React, { Component } from "react";
import { connect } from "react-redux";
import { filterContact } from "../../reducers/contacts/actions-creators";

import { Link } from "react-router-dom";
import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";

import style from "./chat.module.css";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.items.filter(item => item.id == props.match.params.id)
    };
  }

  render() {
    return (
      <section className={style.chatGrid}>
        <Header className={style.header}>
          <Link to="/">
            <IconArrow />
          </Link>
          <h2>{this.state.item[0].name}</h2>
          <button type="button">
            <IconDots />
          </button>
        </Header>

        <section className={style.content}>
          <p>asdfa</p>
        </section>

        <footer className={style.footer}>
          <ChatForm />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items
});

export default connect(mapStateToProps)(Chat);
