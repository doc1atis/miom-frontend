import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
class NavBar extends React.Component {
  uploadIcon = () => {
    return (
      <span style={{ color: "aquamarine" }}>
        <i className="fas fa-cloud-upload-alt"></i>
      </span>
    );
  };
  downloadIcon = () => {
    return (
      <span style={{ color: "aquamarine" }}>
        <i className="fab fa-creative-commons-sampling-plus"></i>
      </span>
    );
  };
  playlistIcon = () => {
    return (
      <span style={{ color: "aquamarine" }}>
        <i className="fas fa-assistive-listening-systems"></i>
      </span>
    );
  };
  render() {
    return (
      // start here
      <Navbar className="top-nav-bar" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand as={Link} to="/" className="miom-word">
          <i className="fab fa-500px"></i>MIOM
        </Navbar.Brand>
        <SearchBar />
        <Navbar.Toggle
          onFocus={(e) => (e.target.style.outline = "none")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/uploads" className="link-text">
              {this.uploadIcon()} upload
            </Nav.Link>
            <Nav.Link as={Link} to="/downloads" className="link-text">
              {this.downloadIcon()} downloads
            </Nav.Link>
            <Nav.Link as={Link} to="/playlists" className="link-text">
              {this.playlistIcon()} playlists
            </Nav.Link>
            <Button />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      // end here
    );
  }
}

export default NavBar;
