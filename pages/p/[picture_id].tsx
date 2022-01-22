import Navbar from "../../components/navbar";
import CommentWithPicture from "../../components/comment-with-picture";
import Link from "next/link";
import { useState } from "react";
import { CommentWithPictureType } from "../../components/comment-with-picture";

interface pictureSinglePage {
  picture_url : string;
  username: string;
  username_url: string;
  pfp_url: string;
  num_of_likes: number;
  caption: string;
  liked_by: string[];
  comment_list: CommentWithPictureType[];
}

export default function PAGE(props : pictureSinglePage) {
  const [commentText, setComment] = useState("");
  const [commentList, addToCommentsList] = useState(props.comment_list || []);
  const [totalLikes, setTotalLikes] = useState(props.num_of_likes || 0);
  const [liked, setLiked] = useState(false);
  const [likedBy, setLikedBy] = useState(props.liked_by || []);

  function addCommentToList(
    pfpToAdd: string,
    usernameToAdd: string,
    commentToAdd: string
  ) {
    addToCommentsList([
      ...commentList,
      {
        pfp: pfpToAdd,
        username: usernameToAdd,
        comment: commentToAdd,
      },
    ]);
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-[975px] mx-auto my-5">
          <div className="flex">
            {/* The picture */}
            <div className="max-w-[50%]">
              <img
                src={props.picture_url || "/human.png"}
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
                      src={props.pfp_url || "/human.png"}
                      alt="profile-picture"
                      className="h-full"
                    />
                  </div>
                  <Link href={props.username_url || "/profile"}><a>{props.username}</a></Link>
                </div>
                <button>
                  <i className="bi bi-three-dots text-2xl mx-2"></i>
                </button>
              </div>

              {/* Commens will go here */}
              <div className="min-h-[200px] h-full">
                <div className="px-3">
                  {commentList.map(
                    (comment: CommentWithPictureType, index: number) => {
                      return (
                        <CommentWithPicture
                          pfp="/human.png"
                          username={comment.username}
                          comment={comment.comment}
                          key={index}
                        />
                      );
                    }
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 w-full">
                <div className="border-b w-full"></div>
                <div className="mx-5">
                  {/* User interaction */}
                  <div className="mt-2 mb-3">
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
                      </button>
                      {likedBy}
                    </div>
                    <p className="mt-1 text-sm font-bold">{totalLikes} Likes</p>
                    {/* <p className="mt-1 text-xs text-gray-400">Days</p> */}
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
                    <button
                      onClick={() => {
                        addCommentToList("/human.png", "Man", commentText);
                        setComment("");
                      }}>
                      Post
                    </button>
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
