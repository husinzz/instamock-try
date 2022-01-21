import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky z-10 top-0 bg-white">
      <div className="min-h-[60px] border-b flex justify-center items-center">
        <div className="max-w-[975px] w-[975px] flex justify-between items-center">
          <Link href={"/"}>
            <a>
              <div className="flex items-center">
                <div className="p-1">
                  <Image
                    src="/instamock-logo.svg"
                    alt="app-logo"
                    width={40}
                    height={40}
                  />
                </div>

                <h1 className="text-2xl">Instamock-try</h1>
              </div>
            </a>
          </Link>
          <form>
            <input
              placeholder="Search..."
              className="border py-1 px-6 rounded-md bg-gray-50"
            />
          </form>
          <nav className="flex justify-evenly items-center w-[25%]">
            <Link href={"/"}>
              <a>
                <i className="text-2xl bi bi-house-door"></i>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <i className="text-2xl bi bi-send"></i>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <i className="text-2xl bi bi-plus-square"></i>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <i className="text-2xl bi bi-heart"></i>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <i className="text-2xl bi bi-person-circle"></i>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
