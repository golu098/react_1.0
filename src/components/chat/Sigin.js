import React from"react";
import { auth } from "../../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import "./chat.css";
import Navbar from "./Navbar";
import ChatBox from "./ChatBox";
import Welcome from "./Welcome";


function Sigin() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default Sigin;