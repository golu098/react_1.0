// import "./App.css";
import React from"react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Anime } from "./components/Pages/Anime";
import { Recommendation } from "./components/Pages/Recommendation";
import { Community} from "./components/Pages/Community";
import { Login } from "./components/Pages/Login";

// community
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/Recommendation" element={<Recommendation />} />
            <Route path="/community" element={<Community />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;