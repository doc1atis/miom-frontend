import React from "react";
import "./indivplaylist.css";
import PlayListHeader from "../PlayListHeader/PlayListHeader";
import SongItem from "../SongItem/SongItem";
class IndivPlaylistPage extends React.Component {
  render() {
    return (
      <div className="hold-all">
        <PlayListHeader topHeader="playlist name" />
        <div className="hold-songItems">
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
        </div>
      </div>
    );
  }
}
export default IndivPlaylistPage;
