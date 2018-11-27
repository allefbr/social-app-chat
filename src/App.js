import React, { Fragment } from "react";

import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Home from "./containers/Home";
import Chat from "./containers/Chat";
import Camera from "./containers/Camera";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/chat/:id" component={Chat} />
      <Route path="/camera" component={Camera} />
    </Fragment>
  </Router>
);

export default App;
