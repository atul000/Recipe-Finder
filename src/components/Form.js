import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn} from "mdbreact";


export default class Form extends Component {
  render() {
      const { getRecipe } = this.props;
    return (   
        <MDBCol md="10">
        <MDBFormInline className="md-form" onSubmit={getRecipe}>
          <MDBIcon icon="search" className="sideMargin" />
          <input className="form-control form-control-sm ml-3 w-75" size="sm" id="myId" type="text" name="recipeName" placeholder="Search" aria-label="Search" />

        <MDBBtn rounded type="submit" className="button">Search</MDBBtn>
        </MDBFormInline>
         </MDBCol>  
    )
  }
}

