import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from "./MainApp";
import Home from "./Home.js";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Routes>
              <Route path="/app" element={<MainApp />} />
              <Route path="/" element={<Home />} />
              <Route path="/rooms/:roomId" element={<MainApp />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
