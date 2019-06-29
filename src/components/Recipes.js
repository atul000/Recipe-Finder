import React, { Component } from "react";
import Card from "./Card";

export default class Recipes extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
        <div className="row">
          {recipes &&
            recipes.map(recipe => {
              return (
                //col-md-6

                <div
                  className="col-md-6 alignment"
                  style={{ marginBottom: "2rem" }}
                  key={recipe.recipe_id}
                >
                  <Card
                    imgUrl={recipe.image_url}
                    imgName={recipe.title}
                    title={
                      recipe.title.length < 23
                        ? `${recipe.title}`
                        : `${recipe.title.substring(0, 25)}...`
                    }
                    publisherName={recipe.publisher}
                    link={{
                      pathname: `/search/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title, id: recipe.recipe_id },
                      getRecipes: { id: recipe.recipe_id }
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
