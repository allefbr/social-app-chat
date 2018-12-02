import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { filterContact } from "../../reducers/contacts/actions-creators";

import {
  initConversation,
  addMessage
} from "../../reducers/messages/actions-creators";

import style from "./chat.module.css";

import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";
import ListMessages from "../../components/ListMessage";

import { filterById } from "../../utils";

class Chat extends Component {
  // state = {
  //   contact: this.props.contact,
  //   message: this.props.message
  // };

  render() {
    const { addMessage, history, contact, message } = this.props;
    // const {  } = this.state;
    const { chatGrid, header, content, footer } = style;

    return (
      <section className={chatGrid}>
        <Header className={header}>
          <button onClick={history.goBack}>
            <IconArrow />
          </button>

          <h2>{contact.name}</h2>
          <button type="button">
            <IconDots />
          </button>
        </Header>

        {message && <ListMessages css={content} items={message} />}

        <footer className={footer}>
          <ChatForm handleMessage={addMessage(contact.id)} />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  contact: state.contacts.items,
  message: state.messages.items
});

const mapDispatchToProps = dispatch => ({
  initConversation: async (id, thumb) => {
    await dispatch(initConversation(id, thumb));
  },
  filterContact: id => {
    dispatch(filterContact(id));
  },
  addMessage: id => e => {
    e.preventDefault();
    dispatch(addMessage(id, e.target.message.value));
    e.target.message.value = "";
  }
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...propsFromState,
  contact: filterById(propsFromState.contact, ownProps.match.params.id),
  message: filterById(propsFromState.message, ownProps.match.params.id),
  addMessage: propsFromDispatch.addMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(Chat)
);
