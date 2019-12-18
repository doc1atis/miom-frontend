import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import "./app.css";
import PlayListPage from "./PlayList/PlayList";
import IndivPlaylistPage from "./IndivPlayList/IndivPlayList";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import NavBar from "./NavBar/NavBar";
import UploadPage from "./UploadPage/UploadPage";
import SongList from "./SongList/SongList";
import Footer from "./Footer/Footer";
import AlbumPage from "./AlbumPage/AlbumPage";
import AddSongPage from "./AddSongPage/AddSongPage";
class App extends React.Component {
  render() {
    return (
      <div id="app-contain-all">
        <Router history={history}>
          <NavBar />
          <Route path="/" exact component={SongList} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/playlist" exact component={IndivPlaylistPage} />
          <Route path="/playlists" exact component={PlayListPage} />
          <Route path="/uploads" exact component={UploadPage} />
          <Route path="/albums" exact component={AlbumPage} />
          <Route path="/addsong/:id" exact component={AddSongPage} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
