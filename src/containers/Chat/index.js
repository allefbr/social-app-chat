import React, { Component } from "react";
import { connect } from "react-redux";
import { filterContact } from "../../reducers/contacts/actions-creators";

import {
  initConversation,
  addMessage,
  selectMessage
} from "../../reducers/messages/actions-creators";

import style from "./chat.module.css";

import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";
import ListMessages from "../../components/ListMessage";

class Chat extends Component {
  render() {
    const { addMessage, message } = this.props;
    const { chatGrid, header, content, footer } = style;

    return (
      <section className={chatGrid}>
        <Header className={header}>
          <button onClick={this.props.history.goBack}>
            <IconArrow />
          </button>

          {/* <h2>{contact.name}</h2> */}
          <button type="button">
            <IconDots />
          </button>
        </Header>

        {message && <ListMessages css={content} items={message} />}

        <footer className={footer}>
          <ChatForm handleMessage={addMessage(this.props.match.params.id)} />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contacts.singleItem,
  message: state.messages.selectItem
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterContact: async id => {
    await dispatch(filterContact(id));
  },
  initConversation: async (id, thumb) => {
    await dispatch(initConversation(id, thumb));
  },
  selectMessage: async id => {
    await dispatch(selectMessage(id));
  },
  addMessage: id => e => {
    e.preventDefault();
    dispatch(addMessage(id, e.target.message.value));
    e.target.message.value = "";
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
