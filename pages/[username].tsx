import { useState } from "react";
import Navbar from "../components/navbar";
import PictureProfileCard, {
  pictureProfileCardType,
} from "../components/picture-profile-card";
import { useRouter } from "next/router";

interface profileType {
  pfp_url: string;
  username: string;
  nickname: string;
  bio: string;
  num_of_post: string;
  num_of_folowers: string;
  num_of_following: string;
  pictures: pictureProfileCardType[];
}

export default function ProfilePage(props: profileType) {
  const [pictures, setPictures] = useState(props.pictures || []);
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-[975px] mx-auto mt-5">
          <header className="flex mt-10">
            {/* Profile picture */}
            <div className="max-w-[312px] w-full mr-10">
              <div className="overflow-hidden rounded-full w-52 mx-auto">
                <img
                  src={props.pfp_url || "/human.png"}
                  alt="user-profile-picture"
                />
              </div>
            </div>
            {/* Profile information */}
            <div className="max-w-[662px] mt-5 w-full">
              {/* Username and interaction */}
              <div className="max-w-1/2">
                <div className="flex justify-left">
                  <span className="text-2xl mr-5">{username}</span>
                  <button className="py-1 px-2 font-bold rounded-md bg-white border">
                    Follow
                  </button>
                </div>
              </div>
              {/* Account Info */}
              <div className="flex justify-left mt-3">
                <span className="mr-5">
                  <strong>{props.num_of_post}</strong> Post
                </span>
                <span className="mr-5">
                  <strong>{props.num_of_folowers}</strong> Followers
                </span>
                <span className="mr-5">
                  <strong>{props.num_of_following}</strong> Following
                </span>
              </div>

              {/* Users bio and nickname */}
              <div className="mt-3">
                <p className="font-bold">{props.nickname}</p>
                <p className="">{props.bio}</p>
              </div>
            </div>
          </header>
          {/* Line devider */}
          <div className="border w-full mt-10 mb-2"></div>
          {/* Profiles feed */}
          <div>
            {!pictures ? (
              <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
                {pictures.map((current: pictureProfileCardType, index) => {
                  return (
                    <PictureProfileCard
                      picture_url={current.picture_url}
                      num_of_comments={current.num_of_comments}
                      num_of_likes={current.num_of_likes}
                      key={index}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center min-h-[200px]">
                No pictures yet
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
