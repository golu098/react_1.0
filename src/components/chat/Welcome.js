// import React from "react";
// import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
// import { auth } from "../../firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const Welcome = () => {
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   return (
//     <main className="welcome">
//       <h2>Welcome to React Chat.</h2>
//       <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
//       <p>Sign in with Google to chat with with your fellow React Developers.</p>
//       <button className="sign-in">
//         <img
//           onClick={googleSignIn}
//           src={GoogleSignin}
//           alt="sign in with google"
//           type="button"
//         />
//       </button>
//     </main>
//   );
// };

// export default Welcome;

import React from "react";
import GoogleSignin from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqz8MNvqT0aXwR68z1NTavbTuR8xqxmOBtLEfyAcH8XisJQIlD2QakpjopsZ8yDwxe0c&usqp=CAU";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqz8MNvqT0aXwR68z1NTavbTuR8xqxmOBtLEfyAcH8XisJQIlD2QakpjopsZ8yDwxe0c&usqp=CAU"
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
