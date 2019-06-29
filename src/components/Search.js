import React, { Component } from "react";
import Nav from "./Nav";
import Api from "./Api";

class Search extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Api />
      </div>
    );
  }
}

export default Search;
