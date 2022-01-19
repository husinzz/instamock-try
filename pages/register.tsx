import SEO from "../components/SEO";
import Link from "next/link";

export default function PAGE() {
  return (
    <section className="h-full bg-gray-50">
      <div className="max-w-[900px] mx-auto flex justify-center items-center h-full">
        <div className="lg:flex justify-center items-center w-full min-h-[618px] hidden bg-[url('https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png')] bg-no-repeat bg-center relative">
          <div className="absolute top-[100px] right-[74px]">
            <img
              src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full max-w-[425px]">
          <div className="border-black border h-2/5 w-full p-5">
            <h1 className="text-center mb-10 mt-5 text-4xl">INSTAMOCK-try</h1>
            <div className="w-10/12 block mx-auto">
              {/* Login Form */}
              <form className="flex flex-col justify-center">
                <input
                  className="border border-black p-1 bg-[#FAFAFA] mb-1 "
                  type="name"
                  placeholder="Username"
                />
                <input
                  className="border border-black p-1 bg-[#FAFAFA] mb-1 "
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="border border-black p-1 bg-[#FAFAFA] mb-1"
                  type="password"
                  placeholder="Password"
                />
                <button className="border border-black p-1 text-white font-bold bg-blue-500">
                  Login
                </button>
              </form>

              <div className="flex justify-between items-center my-5">
                <div className="border border-black h-px w-full mr-3"></div>
                <div>OR</div>
                <div className="border border-black h-px w-full ml-3"></div>
              </div>

              {/* Other alternative Login methods */}
              <div className="flex flex-col justify-center items-center">
                <div>Google Account</div>
              </div>
            </div>
          </div>

          {/* Make Account Button */}
          <div className="border border-black w-full mt-2">
            <div className="text-center p-5">
              Have an account?{" "}
              <Link href="/login">
                <a className="text-blue-400">Login!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>ksdjflk</div>
    </section>
  );
}
