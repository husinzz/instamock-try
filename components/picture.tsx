import Link from "next/link";
import { useState } from "react";
import Comment, { CommentType } from "./comment";

interface pictureType {
  picture_url : string;
  username: string;
  username_url: string;
  pfp_url: string;
  num_of_likes: number;
  caption: string;
  liked_by: string[];
  comment_list: CommentType[];
}

export default function Picture(props: pictureType) {
  const [commentText, setComment] = useState("");
  const [commentList, addToCommentsList] = useState(props.comment_list || []);
  const [totalLikes, setTotalLikes] = useState(props.num_of_likes || 0);
  const [liked, setLiked] = useState(false);
  const [likedBy, setLikedBy] = useState(props.liked_by || []);

  function addCommentToList(usernameToAdd: string, commentToAdd: string) {
    addToCommentsList([
      ...commentList,
      { username: usernameToAdd, comment: commentToAdd },
    ]);
  }

  return (
    <div className="border rounded-sm mb-6 bg-white">
      {/* Profile information */}
      <div className="flex items-center justify-between border-b border-black py-4 px-3">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden h-8 min-w-[32px] mr-3">
            <img src={props.pfp_url ||"/human.png"} alt="profile-picture" className="h-full" />
          </div>
          <Link href={props.username_url}>
            <a> {props.username} </a>
          </Link>
        </div>
        <button>
          <i className="bi bi-three-dots text-2xl mx-2"></i>
        </button>
      </div>

      {/* The picture */}
      <div>
        <img
          src={props.picture_url || "/human.png"}
          alt="users-picture"
          width={614}
          className=""
        />
      </div>

      {/* User interactions */}
      <div className="mx-5 mb-2">
        <div className="mt-4 mb-1">
          <div className="flex items-center">
            <button
              onClick={() => {
                if (!liked && !likedBy.includes(props.username)) {
                  setLiked(true);
                  setTotalLikes(totalLikes + 1);
                  setLikedBy([...likedBy, props.username]);
                } else {
                  setTotalLikes(totalLikes - 1);
                  setLiked(false);
                  setLikedBy(likedBy.filter((e) => e != props.username));
                }
              }}>
              <i
                className={
                  "text-2xl mr-4 bi " +
                  (liked ? "bi-heart-fill text-red-400" : "bi-heart")
                }></i>
              {likedBy}
            </button>
          </div>
          <p className="mt-1 font-bold">{totalLikes} Likes</p>
        </div>

        {/* User caption */}
        <div className="">
          <Link href={props.username_url}>
            <a className="font-bold">{props.username}</a>
          </Link>{" "}
          <span className="">{props.caption}</span>
        </div>

        {/* User Comments */}
        <div>
          {commentList.map((comment: CommentType, index: number) => {
            return (
              <Comment username={comment.username} comment={comment.comment} />
            );
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
        <button
          onClick={() => {
            addCommentToList(props.username, commentText);
            setComment("");
          }}>
          Post
        </button>
      </div>
    </div>
  );
}
