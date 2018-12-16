import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBDatePicker,
  Container
} from "mdbreact";

class ProjectCreateForm extends React.Component {
  render() {
    return (
      <MDBContainer style={{ fontSize: "10px", maxWidth: "70%" }}>
        <MDBRow>
          <MDBCol md="12">
            <form>
              <p
                className="h5 text-center mb-4"
                style={{ color: "#40739e", fontWeight: "bold" }}
              >
                Create Project
              </p>
              <div className="grey-text">
                <MDBInput
                  size="sm"
                  label="Project Name"
                  icon="gg-circle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Short Name"
                  icon="compress"
                  size="sm"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <label style={{ fontSize: "14px" }}>Start Date</label>
                <MDBInput
                  icon="clock-o"
                  title="Start Date"
                  group
                  type="date"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  size="sm"
                  label="Short Description"
                  icon="pencil"
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="secondary" size="sm">
                  Submit <MDBIcon icon="paper-plane-o" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProjectCreateForm;
