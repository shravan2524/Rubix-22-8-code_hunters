import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Searchlist from "./components/Search/Searchlist";

import Header from "./Aniket/Header/Header";
import Login from "./Aniket/Login/Login";
import Profile from "./Aniket/Profile/Profle";
import Homepage from "./Aniket/Homepage/Homepage";
import Mapsscreen from "./Mapsscreen";

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Searchlist />}  />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
