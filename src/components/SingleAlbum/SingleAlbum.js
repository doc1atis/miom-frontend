import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class SingleAlbum extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.imageSource}
          className="card-img-top"
          alt="cover"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>

          <Link
            to={`/addsong/${this.props.albumId}`}
            className="btn btn-primary"
          >
            add song
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = entireState => {
  return { cover: entireState.albumReducer.albums.cover };
};
export default connect(mapStateToProps, {})(SingleAlbum);
