import { useState } from "react";
import Comment from "./comment";
import SEO from "./SEO";

export default function Picture(props) {
  const [commentText, setComment] = useState("");

  return (
    <div className="border rounded-sm mb-6 bg-white">
      <SEO title="Instamock"></SEO>

      {/* Profile information */}
      <div className="flex items-center justify-between border-b border-black py-4 px-3">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden h-8 min-w-[32px] mr-3">
            <img src="/human.png" alt="profile-picture" className="h-full" />
          </div>
          <p>username</p>
        </div>
        <button>
          <i className="bi bi-three-dots text-2xl mx-2"></i>
        </button>
      </div>

      {/* The picture */}
      <div>
        <img src="/human.png" alt="users-picture" width={614} className="" />
      </div>

      {/* User interactions */}
      <div className="mx-5 mb-2">
        <div className="mt-4 mb-1">
          <div className="flex items-center">
            <button>
              <i className="text-2xl mr-4 bi bi-heart"></i>
            </button>
            <button>
              <i className="text-2xl bi bi-chat-right"></i>
            </button>
          </div>
          <p className="mt-1 font-bold">123 Likes</p>
        </div>

        {/* User caption */}
        <div className="">
          <span className="font-bold">Username</span>{" "}
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae
            sequi ea veritatis assumenda dolores voluptas. Libero aspernatur
            beatae accusamus, saepe, eos magnam ab ratione velit aliquam dolorum
            est? Nam.
          </span>
        </div>

        {/* User Comments */}
        <div>
          <Comment username="Guy" comment="Text" />
        </div>
      </div>

      {/* Comment input */}
      <div className="border w-full"></div>
      <div className="flex justify-between my-2 mx-5">
        <input
          placeholder="Add comment"
          className="focus:outline-none pr-2 py-1 w-full mr-1"
          onChange={(e) => setComment(e.target.value)}
          value={commentText}
        />
        <button>Post</button>
      </div>
    </div>
  );
}
