import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconCamera, IconSearch } from "../../components/Icons";

import Header from "../../components/Header";
import SearchForm from "../../components/Search";
import ListPerson from "../../components/ListPerson";

import style from "./home.module.css";

class Home extends Component {
  state = {
    isOpenForm: false,
    initialItems: this.props.items,
    items: []
  };

  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  handleOpenForm = () => {
    this.setState({ isOpenForm: true });
  };

  handleCloseForm = () => {
    this.setState({ isOpenForm: false });
  };

  handleFilter = event => {
    event.preventDefault();
    let value = event.target.value.toLowerCase();
    let updateItems = this.state.initialItems;

    updateItems = updateItems.filter(
      item => item.name.toLowerCase().indexOf(value) !== -1
    );

    this.setState({ items: updateItems });
  };

  render() {
    const { homeGrid, header, form, content } = style;

    return (
      <section className={homeGrid}>
        <Header className={header}>
          <Link to="/camera">
            <IconCamera />
          </Link>
          <h2> Chat </h2>

          <button type="button" onClick={this.handleOpenForm}>
            <IconSearch />
          </button>
        </Header>

        {this.state.isOpenForm && (
          <SearchForm
            className={form}
            handleCloseForm={this.handleCloseForm}
            handleFilter={this.handleFilter}
          />
        )}

        <article className={content}>
          <ListPerson items={this.state.items} />
        </article>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items
});

export default connect(mapStateToProps)(Home);
