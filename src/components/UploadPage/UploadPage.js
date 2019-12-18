import React from "react";
import { Link } from "react-router-dom";
import "./uploadpage.css";
import AlbumForm from "../AlbumForm/AlbumForm";
export default class UploadPage extends React.Component {
  render() {
    return (
      <div id="hold-all-components">
        <div className="d-flex justify-content-end pr-3">
          <div className="btn-group btn-group-lg" role="group" aria-label="...">
            <Link to="/albums" className="btn btn-warning">
              My Albums
            </Link>
          </div>
        </div>
        <AlbumForm />
      </div>
    );
  }
}
