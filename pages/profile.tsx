import Navbar from "../components/navbar";
import PictureProfileCard from "../components/picture-profile-card";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-[975px] mx-auto mt-5">
          <header className="flex mt-10">
            {/* Profile picture */}
            <div className="max-w-[312px] w-full mr-10">
              <div className="overflow-hidden rounded-full w-52 mx-auto">
                <img src="/human.png" alt="user-profile-picture" />
              </div>
            </div>
            {/* Profile information */}
            <div className="max-w-[662px] mt-5 w-full">
              {/* Username and interaction */}
              <div className="max-w-1/2">
                <div className="flex justify-left">
                  <span className="text-2xl mr-5">Username</span>
                  <button className="py-1 px-2 font-bold rounded-md bg-white border">
                    Follow
                  </button>
                </div>
              </div>
              {/* Account Info */}
              <div className="flex justify-left mt-3">
                <span className="mr-5">
                  <strong>100</strong> Post
                </span>
                <span className="mr-5">
                  <strong>100</strong> Followers
                </span>
                <span className="mr-5">
                  <strong>100</strong> Following
                </span>
              </div>

              {/* Users bio and nickname */}
              <div className="mt-3">
                <p className="font-bold">Nickname</p>
                <p className="">Crazy cool bio</p>
              </div>
            </div>
          </header>

          {/* Line devider */}
          <div className="border w-full mt-10 mb-2"></div>

          {/* Profiles feed */}
          <div>
            <div className="flex flex-col">
              <div className="flex justify-between mb-6">
                <PictureProfileCard />
                <PictureProfileCard />
                <PictureProfileCard />
              </div>
              <div className="flex justify-between">
                <PictureProfileCard />
                <PictureProfileCard />
                <PictureProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
