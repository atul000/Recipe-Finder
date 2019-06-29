import React, { Component } from "react";
import Form from "./Form";
import axios from "axios";
import Recipes from "./Recipes";

const API_KEY = "99bcd6e86a8a520d822be8b9937aa034";
// const API_KEY = "368416e6148e654eff591444cf23f22e";

class Api extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;

    e.preventDefault();
    await axios
      .get(
        `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
      )
      .then(res => this.setState({ recipes: res.data.recipes }))
      .catch(error => console.log(error));

    console.log(this.state.recipes);
  };

  render() {
    return (
      // <Router>
      <div>
        <Form getRecipe={this.getRecipe} />
        <br />
        <Recipes recipes={this.state.recipes} />
      </div>
      // </Router>
    );
  }
}

export default Api;
