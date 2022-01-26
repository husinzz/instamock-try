import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Picture from "../components/picture";
import StoryItem from "../components/story-circle";
import Link from "next/link";
import { useState } from "react";
import LoginPage from "./account/login";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  const [logedIn, setLoginState] = useState(false);

  if (logedIn) {
    return (
      <>
        <SEO title="Instamock" />
        <Navbar />
        <div>
          <div className="max-w-[975px] mx-auto relative my-5">
            {/* Feed */}
            <div className="max-w-[614px]">
              {/* Storytray */}
              {/* <div className="max-h-[120px] border bg-white mb-4 flex items-center overflow-hidden rounded-sm hover:overflow-x-auto">
            </div> */}

              {/* Post Feed */}
              <div className="">
                <Picture
                  username="Abdul"
                  username_url="/profile"
                  pfp_url="/human.png"
                  caption="🔥🔥🔥"
                /><Picture
                  username="Abdul"
                  username_url="/profile"
                  pfp_url="/human.png"
                  caption="🔥🔥🔥"
                /><Picture
                  username="Abdul"
                  username_url="/profile"
                  pfp_url="/human.png"
                  caption="🔥🔥🔥"
                /><Picture
                  username="Abdul"
                  username_url="/profile"
                  pfp_url="/human.png"
                  caption="🔥🔥🔥"
                /><Picture
                  username="Abdul"
                  username_url="/profile"
                  pfp_url="/human.png"
                  caption="🔥🔥🔥"
                />
              </div>
            </div>

            {/* fixed stuf 361px max */}
            <div className="max-w-[361px] absolute top-0 right-0 w-full -mx-4">
              <div className="fixed max-w-[361px] w-full">
                <div className="mx-3 mt-5 h-full">
                  {/* Loggedin User */}
                  <div className="flex w-full items-center justify-between">
                    {/* Profile Info */}
                    <div className="flex items-center">
                      {/* Profile Picture */}
                      <div className="max-w-[52px] max-h-[52px] overflow-hidden rounded-full">
                        <img src="/human.png" className="h-full" />
                      </div>

                      {/* Username */}
                      <div className="ml-4">
                        <p className="font-bold">Username</p>
                        <p className="text-sm">Nickname</p>
                      </div>
                    </div>

                    {/* logout button */}
                    <button>Logout</button>
                  </div>

                  {/* Footer */}
                  <footer className=" mt-5">
                    <div className="text-sm text-gray-500">
                      <Link href="https://apalah.tech">
                        <a>&copy; 2022 Instamock-try from Apalah.tech </a>
                      </Link>
                      <br />
                      <Link href="https://instagram.com">
                        <a>Inspired by Instagram from Meta</a>
                      </Link>
                      <p>Created for practice, no harm intended {"<3"}</p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <LoginPage />;
  }
};

export default Home;
