import React from "react";
import ProjectList from "./projectList";
import ProjectCreateForm from "./projectCreateForm";

class ProjectPage extends React.Component {
  render() {
    return (
      <div style={{ margin: "50px", marginTop: "20px", padding: "20px" }}>
        <br />
        <div className="row">
          <div className="col-sm-5 offset-1">
            <ProjectList />
          </div>
          <div className="col-sm-6">
            <ProjectCreateForm style={{ margin: "0 auto;" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
