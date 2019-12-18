import React from "react";
import "./songitem.css";
class SongItem extends React.Component {
  componentDidMount() {
    window.$('[data-toggle="tooltip"]').tooltip();
  }
  render() {
    return (
      <li className="media song-item">
        <img
          style={{ height: "70px" }}
          className="mr-3"
          src="data:image/jpeg;base64,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"
          alt="cover"
        />
        <div className="media-body song-item-body">
          <div className="d-flex justify-content-between">
            <div className="left-content-app">
              <span className="song-icon">
                <i className="fas fa-compact-disc"></i>
              </span>
              <h5 className="song-title d-inline">rap trap</h5>
              <p className="song-description">song description</p>
            </div>
            <div className="functionalities d-flex">
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="play"
                className="function-button align-self-center"
              >
                <i className="fas fa-play-circle"></i>
              </span>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="download"
                className="function-button align-self-center"
              >
                <i className="fas fa-cloud-download-alt"></i>
              </span>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="add in playlist"
                className="function-button align-self-center"
              >
                <i className="fas fa-plus-square"></i>
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default SongItem;
