import React from "react";
import PlayListHeader from "../PlayListHeader/PlayListHeader";
import PlaylistCard from "./PlayListCard";
import "./playlistpage.css";
class PlayListPage extends React.Component {
  render() {
    return (
      <div className="hold-all-main">
        <PlayListHeader topHeader="my playlists" />
        <div className="hold-cards container">
          <div className="row justify-content-between row-holder">
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </div>
        </div>
      </div>
    );
  }
}
export default PlayListPage;
