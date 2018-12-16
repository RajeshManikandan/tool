import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

const NavList = {
  color: "#333"
};

class NavbarPage extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar
        light
        expand="md"
        //style={{ background: "#48C5B6", padding: "5px", paddingLeft: "20px" }}
        style={{
          background: "#fff",
          padding: "5px",
          paddingLeft: "20px",
          color: "#333"
        }}
      >
        <NavbarBrand style={{ color: "#333" }}>
          <strong style={{ fontSize: "18px" }}>Trello</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar />
        <NavbarNav right style={{ paddingRight: "20px" }}>
          <NavItem>
            <NavLink to="#!">Home</NavLink>
          </NavItem>
          <NavItem active>
            <NavLink to="#!">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#!">Action Items</NavLink>
          </NavItem>
        </NavbarNav>
      </Navbar>
    );
  }
}

export default NavbarPage;
