import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import NavBar from "./NavBar/NavBar";
import SearchResults from "./SearchResults/SearchResults";
class App extends React.Component {
  render() {
    return (
      <div id="app-root">
        <Router history={history}>
          <NavBar />
          <Route path="/" exact component={SearchResults} />
        </Router>
      </div>
    );
  }
}

export default App;
