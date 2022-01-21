import Navbar from "../components/navbar";
import { useState } from "react";

export default function PAGE() {
  const [commentText, setComment] = useState("");

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-[975px] mx-auto my-5">
          <div className="flex">
            {/* The picture */}
            <div className="max-w-[50%]">
              <img
                src="/human.png"
                alt="Posted picture"
                className="h-full w-full"
              />
            </div>

            {/* Comments and interactions */}
            <div className="max-w-[40%] w-full bg-white relative">
              {/* Poster profile */}
              <div className="flex items-center justify-between border-b py-4 px-3">
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden h-8 mr-2">
                    <img
                      src="/human.png"
                      alt="profile-picture"
                      className="h-full"
                    />
                  </div>
                  <p>username</p>
                </div>
                <button>
                  <i className="bi bi-three-dots text-2xl mx-2"></i>
                </button>
              </div>

              {/* Commens will go here */}
              <div className="min-h-[200px] h-full">
                <div className="px-3">
                  <Comment />
                </div>
              </div>

              <div className="absolute bottom-0 w-full">
                <div className="border-b w-full"></div>
                <div className="mx-5">
                  {/* User interaction */}
                  <div className="mt-2 mb-3">
                    <div className="flex items-center">
                      <button>
                        <i className="text-2xl mr-4 bi bi-heart"></i>
                      </button>
                      <button>
                        <i className="text-2xl bi bi-chat-right"></i>
                      </button>
                    </div>
                    <p className="mt-1 text-sm font-bold">123 Likes</p>
                    <p className="mt-1 text-xs text-gray-400">1 Day ago</p>
                  </div>
                </div>

                {/* Comments input */}
                <div className="border-b w-full"></div>
                <div className="mx-5">
                  <div className="flex justify-between my-2">
                    <input
                      placeholder="Add comment"
                      className="focus:outline-none pr-2 py-1 w-full mr-1"
                      onChange={(e) => setComment(e.target.value)}
                      value={commentText}
                    />
                    <button>Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Comment() {
  return (
    <div className="mt-2">
      {/* Profile picture */}
      <div className="flex">
        <div className="rounded-full overflow-hidden h-8 min-w-[32px] mr-3">
          <img src="/human.png" alt="profile-picture" className="h-full" />
        </div>

        {/* Comment and username */}
        <div>
          <div className="text-md">
            <span className="font-bold">Username</span> Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illum non, doloribus pariatur officia
            quidem quia quos delectus minima error dignissimos, cupiditate atque
            numquam aspernatur iure quas nisi maxime tempora a.
          </div>
          <p className="text-xs text-gray-400">2d</p>
        </div>
      </div>
    </div>
  );
}
