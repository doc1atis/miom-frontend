import React from "react";
import "./playlistheader.css";
class PlayListHeader extends React.Component {
  render() {
    return (
      <div className="main-playlist-container d-flex justify-content-center pb-3 pt-1">
        <div className="d-flex flex-column">
          <h4 className="my-playlist page-header align-self-center">
            {this.props.topHeader}
          </h4>
          <button className="create-playlist btn btn-primary align-self-center">
            <i className="fas fa-assistive-listening-systems"></i> Create
            Playlist
          </button>
        </div>
      </div>
    );
  }
}
export default PlayListHeader;
