import React from "react";
import { Card, CardTitle, CardText } from "mdbreact";
import { MDBMask, MDBView } from "mdbreact";

const cardStyle = {
  padding: "8px",
  marginBottom: "8px",
  borderLeft: "5px solid violet",
  cursor: "pointer",
  background: "#f1f2f6"
};
const cardTitleStyle = {
  marginBottom: "5px",
  display: "inline",
  clear: "both",
  fontWeight: "bold",
  color: "#636e72"
};
const cardSubText = {
  fontSize: "10px",
  float: "right"
};

class ProjectList extends React.Component {
  state = {
    projects: [
      {
        name: "Facility Assignment Service",
        keyPerson: "asdjhhas",
        id: "1234",
        color: "#123434"
      },
      {
        name: "Facility Assignment Service",
        keyPerson: "asdjhhas",
        id: "123234",
        color: "#893489"
      }
    ]
  };
  render() {
    const { projects } = this.state;
    return (
      <div>
        <h5 style={{ color: "#40739e", fontWeight: "bold" }}>Projects</h5>
        <br />
        {projects.map(project => (
          <MDBView hover key={project.id}>
            <Card style={cardStyle}>
              <div style={cardTitleStyle}>{project.name}</div>
              <span style={cardSubText}>{project.keyPerson}</span>
            </Card>
            <MDBMask className="flex-center" overlay="blue-slight" />
          </MDBView>
        ))}
      </div>
    );
  }
}

export default ProjectList;
