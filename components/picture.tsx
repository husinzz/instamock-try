import { useState } from "react";
import Comment, { CommentType } from "./comment";
import SEO from "./SEO";

interface Comment {
  username : string;
  comment : string;
}

export default function Picture(props) {
  const [commentText, setComment] = useState("");
  const [commentList, addToCommentsList] = useState([]);
  const [totalLikes, setTotalLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function addCommentToList(usernameToAdd : string, commentToAdd : string)  {
    addToCommentsList(commentList.concat({username: usernameToAdd, comment : commentToAdd}))
  }

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
            <button onClick={() => {
              if (!liked) {
                setLiked(true);
                setTotalLikes(totalLikes + 1);
              } else {
                setTotalLikes(totalLikes - 1);
                setLiked(false)
              }
            }}>
              <i className={"text-2xl mr-4 bi " + (liked ? "bi-heart-fill text-red-400" : "bi-heart")}></i>
            </button>
          </div>
          <p className="mt-1 font-bold">{totalLikes} Likes</p>
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
          {commentList.map((comment : CommentType, index : number) => {
            return <Comment username={comment.username} comment={comment.comment} />
          })}
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
        <button onClick={() => {
          addCommentToList("Man", commentText);
          setComment("")
        }}>Post</button>
      </div>
    </div>
  );
}