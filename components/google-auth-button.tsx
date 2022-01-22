import { auth, googleProvider } from "../firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"

export default function GoogleAuthButton() {

  const doGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // change the logedin state
        alert("succses")
      }).catch((error) => {
        // outpupt error
        alert("lol no")
      })
  }

  return (
    <button className="p-2" onClick={doGoogleAuth}>
      <i className="bi bi-google"></i>
    </button>
  );
}
