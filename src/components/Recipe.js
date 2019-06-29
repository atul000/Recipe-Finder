import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "YOUR_API_KEY";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const id = this.props.location.state.id;

    await axios
      .get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
      .then(res => this.setState({ activeRecipe: res.data.recipes[0] }));
    console.log(this.state.activeRecipe);

    console.log(id);
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisheer">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>{" "}
              </span>
            </p>

            <MDBBtn color="default">
              <Link to="/search">Go Home</Link>
            </MDBBtn>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
