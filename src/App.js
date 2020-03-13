import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SecondName />
    </div>
  );
};
const Header = () => {
  return (
    <div className="Header">
      <ul>
        <li>Andriy</li>
      </ul>
    </div>
  );
};
const SecondName = () => {
  return (
    <div className="Header">
      <ul>
        <li>Shulha</li>
      </ul>
    </div>
  );
};
export default App;
