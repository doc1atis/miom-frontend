import React from "react";
import "./style.css";
import SingleAlbum from "../SingleAlbum/SingleAlbum";
import API from "../../API/api";
export default class AlbumForm extends React.Component {
  state = { albums: [] };
  async componentDidMount() {
    const response = await API.get("/useralbums");
    let albums = response.data.albums;
    this.setState({ albums });
    console.log("olgy the response is: ", response.data);
  }
  renderAlbums = () => {
    if (this.state.albums.length) {
      return this.state.albums.map(album => {
        return (
          <SingleAlbum
            key={album._id}
            albumId={album._id}
            title={album.title}
            imageSource={`http://localhost:3001/${album.cover}`}
          />
        );
      });
    }
    return <div>loading...</div>;
  };
  render() {
    return (
      <div className="hold-all container-fluid">
        <div className="row justify-content-around">{this.renderAlbums()}</div>
      </div>
    );
  }
}
