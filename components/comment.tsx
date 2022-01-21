export interface CommentType {
  username: String;
  comment: String;
}

export default function Comment(props: CommentType) {
  return (
    <div>
      <span className="font-bold">{props.username}</span>{" "}
      <span className="">
        {props.comment}
      </span>
    </div>
  );
}
