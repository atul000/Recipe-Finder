import React, { Component } from "react";
import Nav from "./Nav";

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br />
        <p
          style={{
            fontSize: "200%",
            marginLeft: "10%",
            fontFamily: "Comic Sans MS"
          }}
        >
          For more information you can contact me on{" "}
          <a href="https://www.linkedin.com/in/atul-beniwal-32a546151/">
            Linkedin.
          </a>
        </p>
      </div>
    );
  }
}
