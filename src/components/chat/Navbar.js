import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log("Sign-in successful:", result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.log("Sign-in error:", error);
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      {/* <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqz8MNvqT0aXwR68z1NTavbTuR8xqxmOBtLEfyAcH8XisJQIlD2QakpjopsZ8yDwxe0c&usqp=CAU"
            alt="sign in with google"
            type="button"
          />
        </button>
      )} */}
    </nav>
  );
};

export default NavBar;
