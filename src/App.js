import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

  return (

      <div className="app-wrapper">
            <Header />
            <Navbar />
        <div className="app-wrapper-content">
            <Route path="/profile" render={ () => <ProfileContainer  /> } />
            <Route path="/dialogs" render={ () => <DialogsContainer  /> } />
            <Route path="/users" render={ () => <UsersContainer/> } />
            <Route path="/music" render={ () => <Music/> } />
            <Route path="/settings" render={ () => <Settings/> } />
        </div>
      </div>

  );
};
export default App;
