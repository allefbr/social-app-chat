import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconCamera, IconSearch } from "../../components/Icons";

import Header from "../../components/Header";
import SearchForm from "../../components/Search";
import ListPerson from "../../components/ListPerson";

import style from "./home.module.css";

import { contacts } from "../../utils/data";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenForm: false,
      initialItems: contacts,
      items: []
    };

    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleOpenForm() {
    this.setState({ isOpenForm: true });
  }

  handleCloseForm() {
    this.setState({ isOpenForm: false });
  }

  handleFilter(event) {
    event.preventDefault();
    let value = event.target.value.toLowerCase();
    let updateItems = this.state.initialItems;

    updateItems = updateItems.filter(
      item => item.name.toLowerCase().indexOf(value) !== -1
    );

    this.setState({ items: updateItems });
  }

  UNSAFE_componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  render() {
    return (
      <section className={style.homeGrid}>
        <Header className={style.header}>
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
            className={style.form}
            handleCloseForm={this.handleCloseForm}
            handleFilter={this.handleFilter}
          />
        )}

        <article className={style.content}>
          <ListPerson items={this.state.items} />
        </article>
      </section>
    );
  }
}

export default Home;
