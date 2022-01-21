import Link from "next/link";

export default function StoryItem() {
  return (
    <div className="my-2 mx-3 min-w-[52px]">
      <div className="rounded-full block overflow-hidden">
        <Link href={"/"}>
          <a className="">
            <img src="https://placeholder.pics/svg/52" height={52} width={52} />
          </a>
        </Link>
      </div>
      <p className="text-center text-sm">text</p>
    </div>
  );
}
