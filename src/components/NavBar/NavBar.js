import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "../Button/Button";
import LinkText from "../LinkText/LinkText";
import SearchBar from "../SearchBar/SearchBar";
class NavBar extends React.Component {
  downloadIcon = () => {
    return <i className="fab fa-creative-commons-sampling-plus"></i>;
  };
  uploadIcon = () => {
    return <i className="fas fa-cloud-upload-alt"></i>;
  };
  playlistIcon = () => {
    return <i className="fas fa-assistive-listening-systems"></i>;
  };
  render() {
    return (
      <nav id="top-nav-bar" className="navbar navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <i className="fab fa-500px"></i>
          <span className="miom-word">MIOM</span>
        </Link>
        <SearchBar />
        <div className="d-flex justify-content-between links-holder">
          <LinkText
            text="uploads"
            goTo="/uploads"
            frontIcon={this.uploadIcon()}
          />
          <LinkText
            className="doki"
            text="downloads"
            goTo="/downloads"
            frontIcon={this.downloadIcon()}
          />
          <LinkText
            text="playlists"
            goTo="/playlists"
            frontIcon={this.playlistIcon()}
          />
          <Button />
        </div>
      </nav>
    );
  }
}

export default NavBar;
