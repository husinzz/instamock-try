export interface CommentWithPictureType {
  pfp : string;
  username : string;
  comment : string;
}

export default function CommentWithPicture(props : CommentWithPictureType) {
  return (
    <div className="mt-3">
      {/* Profile picture */}
      <div className="flex">
        <div className="rounded-full overflow-hidden h-8 min-w-[32px] mr-3">
          <img src={props.pfp} alt="profile-picture" className="h-full" />
        </div>

        {/* Comment and username */}
        <div>
          <div className="text-md">
            <span className="font-bold">{props.username}</span> {props.comment}
          </div>
          {/* <p className="text-xs text-gray-400">secon</p> */}
        </div>
      </div>
    </div>
  );
}
