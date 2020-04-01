import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

  return (

      <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
        <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={ () => <ProfileContainer  /> } />
            <Route path="/dialogs" render={ () => <DialogsContainer  /> } />
            <Route path="/users" render={ () => <UsersContainer/> } />
            <Route path="/music" render={ () => <Music/> } />
            <Route path="/settings" render={ () => <Settings/> } />
            <Route path="/login" render={ () => <Login/> } />
        </div>
      </div>

  );
};
export default App;
