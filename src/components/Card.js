import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    const { imgName, imgUrl, title, publisherName, link } = this.props;
    // const MoreInfo = `https://www.food2fork.com/api/get?key=368416e6148e654eff591444cf23f22e&rId=${getRecipes}`;

    return (
      <MDBCol>
        <MDBCard style={{ width: "27rem", marginRight: "3em" }}>
          <MDBCardImage
            className="img-fluid img"
            style={{ width: "100%", height: "220px" }}
            alt={imgName}
            src={imgUrl}
            waves
          />

          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>

            <MDBCardText>Publisher: {publisherName}</MDBCardText>
            <MDBBtn className="button1">
              <Link to={link}>View Recipe</Link>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
