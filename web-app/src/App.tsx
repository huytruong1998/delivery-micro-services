import React from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
