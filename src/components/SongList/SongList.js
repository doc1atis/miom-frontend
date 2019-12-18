import React from "react";
import "./songlist.css";
import SongItem from "../SongItem/SongItem";
class SongList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled song-list">
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </ul>
    );
  }
}

export default SongList;
