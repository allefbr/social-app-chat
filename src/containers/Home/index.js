import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { IconCamera, IconSearch } from "../../components/Icons";

import Header from "../../components/Header";
import SearchForm from "../../components/Search";
import Person from "../../components/ListPerson";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenForm: false,
      listPerson: [
        {
          id: 1,
          name: "Emily Henderson",
          lastMessage: "Send a photo",
          totalMessageNoRead: 2,
          date: "2018-11-25 17:55:00",
          hasOn: true
        },
        {
          id: 2,
          name: "Anna Johanson",
          lastMessage: "Send a photo",
          totalMessageNoRead: 1,
          date: "2018-11-25 17:39:00",
          hasOn: true
        },
        {
          id: 3,
          name: "Elysha Seeley",
          lastMessage: "Wow! it's beautiful :)",
          totalMessageNoRead: 0,
          date: "2018-11-25 17:39:00",
          hasOn: false
        },
        {
          id: 4,
          name: "Megan Kelly",
          lastMessage: "Hey, How it is going?",
          totalMessageNoRead: 0,
          date: "2018-09-25 10:39:00",
          hasOn: false
        },
        {
          id: 5,
          name: "Anabel Barajas",
          lastMessage: "Hey, Jonh What did have for lunch",
          totalMessageNoRead: 0,
          date: "2018-08-24 10:00:00",
          hasOn: false
        },
        {
          id: 6,
          name: "Ariana Williams",
          lastMessage: "I had a perfect day, I hope you too",
          totalMessageNoRead: 0,
          date: "2018-08-22 10:00:00",
          hasOn: false
        }
      ]
    };

    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleOpenForm(event) {
    this.setState({ isOpenForm: true });
  }

  handleCloseForm(event) {
    this.setState({ isOpenForm: false });
  }

  handleFilter() {
    console.log("filter");
  }

  render() {
    return (
      <Fragment>
        <Header>
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
            handleCloseForm={this.handleCloseForm}
            handleFilter={this.handleFilter}
          />
        )}

        <article className="persons">
          {this.state.listPerson.map(person => (
            <Link to={`/chat/${person.id}`}>
              <Person key={person.id} {...person} />
            </Link>
          ))}
        </article>
      </Fragment>
    );
  }
}

export default Home;
