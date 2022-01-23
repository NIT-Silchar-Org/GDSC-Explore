import Lottie from "react-lottie";
import animationData from "../public/lottie/explore-anime.json";
import { BsClock } from "react-icons/bs";

export default function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  return (
    <>
      <div className="container mt-12 p-4">
        <div className="flex flex-col-reverse md:flex-row justify-center">
          <div className="container md:pl-[5vw] w-[100%] md:w-[50%]">
            <h1 className="text-[2rem] font-medium md:text-[3.75rem]">
              GDSC Explore
            </h1>
            <h1 className=" text-[1.1rem] text-[#373F41] md:font-normal  md:text-[1.875rem] md:text-[#373F41]">
              Explore the Developers from the North-East
            </h1>
            <div className="flex justify-start items-center mt-8 md:mt-4">
              <BsClock className="mr-4 text-[1.5rem] md:text-[1.75rem]" />
              <h1 className="text-[1.1rem] md:text-[1.75rem] text-indigo-600">
                4th, 5th and 6th February, 2022
              </h1>
            </div>

            <p className="text-[#737B7D] md:text-xl md:text-[#737B7D] mt-4">
              GDSC Explore is the largest developers &#39; fest in the North Eastern
              India, brought to you by GDSC AEC, GDSC NIT Silchar, GDSC IIIT
              Guwahati, GDSC NIT Agartala. It will provide a platform for
              developers to engage and learn by participating in various
              activities and workshops earning badges and certificates along the
              way.
            </p>
            <div className="flex justify-start mt-16 mb-8">
              <button className=" bg-[#3C64B1] rounded  text-base md:text-lg text-white  hover:shadow-xl ease-in-out duration-300 py-2 px-3 mr-2">
                Register Now
              </button>
              <a href="https://drive.google.com/file/d/1hT4FtlaaNycBbJRVKJ4FNv7xd6wKiaB3/view?usp=sharing">
                <button className="ease-in-out duration-300 hover:text-white hover:bg-[#3C64B1] border-2 border-[#1B4996] text-base md:text-lg text-[#1B4996] rounded py-2 px-3">
                  See Brochure
                </button>
              </a>
            </div>
          </div>

          <div className="container w-[100%] md:w-[50%] mt-4 md:mt-1 mb-6 md:mb-1">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </>
  );
}
