import React from "react";
import github from "./github.svg";
import { SearchUsers } from "./components/SearchUsers/SearchUsers";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <img 
          src={github} 
          className="App__logo" 
          alt="logo" 
        />
      </header>
      
      <SearchUsers />
    </div>
  );
}

export default App;