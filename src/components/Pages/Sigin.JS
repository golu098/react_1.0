import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Sigin = () => {
  const [user, setUser] = useState(false);
  const googleSignIn = () => {
    setUser(true);
  };
  const signOut = () => {
    setUser(false);
  };
  return (
    <nav className="sigin">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in1">
          <img
            onClick={googleSignIn}
            src="https://blog.boot.dev/img/800/Screen-Shot-2020-07-20-at-3.webp"
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};
export default Sigin;
