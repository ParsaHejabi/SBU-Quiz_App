import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import Upload from "./upload/Upload";
import Questions from "./questions/Questions";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink to="/">Questions</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Upload</NavLink>
            </li>
          </ul>
          <div className="App">
            <div className="Card">
              <Route exact path="/" component={Questions} />
              <Route path="/upload" component={Upload} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
