import React, { useState } from "react";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function App() {

  /* This SHOULD render: Main and Sidebar*/
  return (
    <div className="appContainer">
      <Sidebar />
      <Main />
    </div>
  );

}

export default App;
