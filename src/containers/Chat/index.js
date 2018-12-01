import React, { Component } from "react";
import { connect } from "react-redux";
import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";
import ListMessages from "../../components/ListMessages";
import style from "./chat.module.css";

import { filterById } from "../../utils";

class Chat extends Component {
  state = {
    person: filterById(this.props.items, this.props.match.params.id),
    message: filterById(this.props.messages, this.props.match.params.id)
  };

  render() {
    const { person, message } = this.state;
    const { chatGrid, header, content, footer } = style;

    return (
      <section className={chatGrid}>
        <Header className={header}>
          <button onClick={this.props.history.goBack}>
            <IconArrow />
          </button>

          <h2>{person.name}</h2>
          <button type="button">
            <IconDots />
          </button>
        </Header>

        {message && <ListMessages css={content} items={message} />}

        <footer className={footer}>
          <ChatForm />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items,
  messages: state.messages.items
});

export default connect(mapStateToProps)(Chat);
