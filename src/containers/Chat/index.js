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
      route: this.match
    };
  }

  componentDidMount() {
    this.props.filterContact();
  }

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

const mapDispatchToProps = (dispatch, props) => ({
  filterContact: () => dispatch(filterContact(props.match.params.id))
});

export default connect(
  null,
  mapDispatchToProps
)(Chat);
