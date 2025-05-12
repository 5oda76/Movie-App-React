import React, { useState } from "react";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import About from "./subsites/About";
import Impressum from "./subsites/Impressum";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {

  /* This SHOULD render: Main and Sidebar*/
  return (
    <Router>
      <div className="appContainer">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </div>
    </Router>
  );

}

export default App;
