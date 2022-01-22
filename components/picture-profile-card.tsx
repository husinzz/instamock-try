export interface pictureProfileCardType {
  picture_url: string;
  num_of_likes: string;
  num_of_comments: string;
}

export default function PictureProfileCard(props: pictureProfileCardType) {
  return (
    <div className="">
      <div className="max-w-[300px] relative">
        <div className="relative">
          {/* <div className="bg-gray-200 h-full w-full bg-opacity-50 absolute top-0"></div> */}
          <img
            src={props.picture_url || "/human.png"}
            alt="Users post"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          {/* <span className="mr-2 text-2xl"><i className="bi bi-heart-fill text-white "></i>2{props.num_of_likes}</span>
          <span><i className="bi bi-heart-fill text-white text-2xl"></i>{props.num_of_comments}</span> */}
        </div>
      </div>
    </div>
  );
}
