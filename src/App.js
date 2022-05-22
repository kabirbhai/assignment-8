import React from "react";
import "./index.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
