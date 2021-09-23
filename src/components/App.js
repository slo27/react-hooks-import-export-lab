import React from "react";
import { username, city, image } from "../data/user";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About image={image} />
    </div>
  );
}

export default App;
