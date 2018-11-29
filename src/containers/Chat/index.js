import React, { Component } from "react";
import { connect } from "react-redux";
import { IconArrow, IconDots } from "../../components/Icons";
import Header from "../../components/Header";
import ChatForm from "../../components/Chat";
import style from "./chat.module.css";

class Chat extends Component {
  state = {
    item: this.props.items.filter(item => item.id == this.props.match.params.id)
  };

  render() {
    const { chatGrid, header, content, footer } = style;

    return (
      <section className={chatGrid}>
        <Header className={header}>
          <button onClick={this.props.history.goBack}>
            <IconArrow />
          </button>

          <h2>{this.state.item[0].name}</h2>
          <button type="button">
            <IconDots />
          </button>
        </Header>

        <section className={content}>
          <p>asdfa</p>
        </section>

        <footer className={footer}>
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
