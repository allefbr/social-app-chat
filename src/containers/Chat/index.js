import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  initConversation,
  addMessage
} from "../../store/reducers/messages/actions-creators";

import style from "./chat.module.css";

import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";
import ListMessages from "../../components/ListMessage";

import { filterById } from "../../utils";

class Chat extends Component {
  componentDidMount() {
    this.props.initConversation();
  }

  render() {
    const { addMessage, history, contact, message } = this.props;
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

        <section className={content}>
          {message && <ListMessages items={message} />}
        </section>

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
  initConversation: (id, thumb) => {
    dispatch(initConversation(id, thumb));
  },
  addMessage: id => e => {
    e.preventDefault();
    dispatch(addMessage(id, e.target.message.value));
    e.target.message.value = "";
  }
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...propsFromState,
  ...propsFromDispatch,
  contact: filterById(propsFromState.contact, ownProps.match.params.id),
  message: filterById(propsFromState.message, ownProps.match.params.id),
  initConversation: () => {
    const contact = filterById(
      propsFromState.contact,
      ownProps.match.params.id
    );

    if (!propsFromState.message.some(element => element.id === contact.id)) {
      return propsFromDispatch.initConversation(contact.id, contact.thumb);
    }
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(Chat)
);
