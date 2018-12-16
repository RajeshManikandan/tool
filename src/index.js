import React from "react";
import ReactDOM from "react-dom";
import NavBarPage from "/src/components/navbar";
import ActionItem from "/src/components/actionItem";
import ProjectsPage from "/src/components/projectsPage";
import ProjectPage from "/src/components/projectPage";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <NavBarPage />
          {/* <ActionItem />*/}
          {/*<ProjectsPage />*/}
          <ProjectPage />
        </React.Fragment>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
