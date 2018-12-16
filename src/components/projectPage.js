import React from "react";
import StatsPage from "/src/components/statsPage.js";
import TaskPage from "/src/components/taskPage.js";
import "./css/projectPage.css";
import {
  Navbar,
  NavbarNav,
  NavItem,
  NavLink,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  MDBTabPane,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBTabContent
} from "mdbreact";
class ProjectPage extends React.Component {
  state = {
    activeItemPills: "1"
  };

  togglePills = tab => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="project container-fluid">
          <div className="jumbotron">
            <div className="h4-responsive title">
              Facility Assignment Service
            </div>
            <p className="mt-2">Mss psr creation</p>
          </div>
        </div>
        {/*<div expand="md" className="sub-nav">
          <div style={{ textAlign: "center" }} className="row">
            <div active style={{ background: "#051937" }} className="col-3">
              <NavLink to="#!">Stats</NavLink>
            </div>
            <div className="col-3">
              <NavLink to="#!">Summary</NavLink>
            </div>
            <div className="col-3">
              <NavLink to="#!">Tasks</NavLink>
            </div>
            <div className="col-3">
              <NavLink to="#!">Tickets</NavLink>
            </div>
          </div>
        </div>
        <StatsPage />*/}
        <MDBContainer>
          <MDBNav pills color="secondary">
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={{
                  active: this.state.activeItemPills === "1"
                }}
                onClick={() => {
                  this.togglePills("1");
                }}
              >
                Active
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={{
                  active: this.state.activeItemPills === "2"
                }}
                onClick={() => {
                  this.togglePills("2");
                }}
              >
                Link
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={{
                  active: this.state.activeItemPills === "3"
                }}
                onClick={() => {
                  this.togglePills("3");
                }}
              >
                Link
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={{
                  active: this.state.activeItemPills === "4"
                }}
                onClick={() => {
                  this.togglePills("4");
                }}
              >
                Help
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItemPills}>
            <MDBTabPane tabId="1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
        <TaskPage />
      </React.Fragment>
    );
  }
}
export default ProjectPage;
