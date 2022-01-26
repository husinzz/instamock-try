import Link from "next/link";
import GoogleAuthButton from "../../components/google-auth-button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import SEO from "../../components/SEO";

export default function LoginPage() {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function doLoginWithEmailAndPassword(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("login")
      }).catch((error) => {
        alert("lol no")
      })
  }

  return (
    <section className="h-screen bg-gray-50">
      <SEO title="Login - Instamock" />
      <div className="max-w-[900px] mx-auto flex justify-center items-center h-full">
        <div className="lg:flex justify-center items-center w-full min-h-[618px] hidden bg-[url('https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png')] bg-no-repeat bg-center relative">
          <div className="absolute top-[100px] right-[74px]">
            <img
              src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full max-w-[425px]">
          <div className="border-black border h-2/5 w-full p-5">
            <h1 className="text-center mb-10 mt-5 text-4xl">INSTAMOCK-try</h1>
            <div className="w-10/12 block mx-auto">
              {/* Login Form */}
              <div className="flex flex-col justify-center">
                <input
                  className="border border-black p-1 bg-[#FAFAFA] mb-1 "
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border border-black p-1 bg-[#FAFAFA] mb-1"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => doLoginWithEmailAndPassword(email, password)} className="border border-black p-1 text-white font-bold bg-blue-500">
                  Login
                </button>
              </div>

              <div className="flex justify-between items-center my-5">
                <div className="border border-black h-px w-full mr-3"></div>
                <div>OR</div>
                <div className="border border-black h-px w-full ml-3"></div>
              </div>

              {/* Other alternative Login methods */}
              <div className="flex justify-center items-center text-2xl">
                <GoogleAuthButton />
              </div>
            </div>
          </div>

          {/* Make Account Button */}
          <div className="border border-black w-full mt-2">
            <div className="text-center p-5">
              Don't have an account yet?{" "}
              <Link href="/account/register">
                <a className="text-blue-400">Make One!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
