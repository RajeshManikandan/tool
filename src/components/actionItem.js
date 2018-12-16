import React from "react";
import styles from "./css/home.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
class ActionItmes extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">.col-md-4</MDBCol>
            <MDBCol md="4">.col-md-4</MDBCol>
            <MDBCol md="4">.col-md-4</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ActionItmes;
