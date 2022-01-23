import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../public/lottie/explore-anime.json";

export default function Navbar({ toggleSidebar }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    toggleSidebar();
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  const [stopped, setStopped] = useState(true);
  const handleHover = () => {
    setStopped(!stopped);
  };

  return (
    <>
      <div className="sticky top-[0px] z-[10] container-fluid">
        <div className="flex justify-between items-center bg-[rgba(205,235,255,0.3)] backdrop-blur-[12px] h-[4.2rem] shadow-[0px_4px_17px_rgba(0,0,0,0.1)] px-[5%] md:px-[8%]">
          <div className="flex flex-row items-center">
            <div className="pt-[8px] mb-[16px] mr-[10px]">
              <a onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <Lottie
                  options={defaultOptions}
                  height={80}
                  width={80}
                  isStopped={stopped}
                />
              </a>
            </div>
            <div className="font-[550] text-[20px] tracking-[0.5px]">GDSC Explore</div>
          </div>

          <div className="flex">
            <div
              className="hidden md:flex w-[400px] h-[100px] flex-row justify-between"
              id="lp-view"
            >
              <div className="hover:text-blue-500 flex items-center">
                <a href="#header-section">Home</a>
              </div>
              <div className="flex items-center hover:text-blue-500">
                <a href="#events-section">Events</a>
              </div>
              <div className="hover:text-blue-500 flex items-center">
                <a href="#team-secion">Teams</a>
              </div>
              <div className="hover:text-blue-500 flex items-center">
                <a href="#sponsors-section">Sponsors</a>
              </div>
              <div className="hover:text-blue-500 flex items-center">
                <a href="#speaker-section">Speakers</a>
              </div>
            </div>
            <div className="md:hidden flex" id="mb-view">
              <button
                className="text-black p-2 mr-[0px]"
                onClick={() => {
                  handleToggle();
                }}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* side bar */}
      <div
        className={
          toggle
            ? "bg-black bg-opacity-30 absolute inset-0 z-20 "
            : "bg-black bg-opacity-30 absolute inset-0 z-20 hidden"
        }
        onClick={() => {
          handleToggle();
        }}
      >
        <div
          id="sidebar"
          className="z-20 bg-white h-full w-[66%] px-[2.2rem] py-[1.5rem]"
        >
          <div id="logo" className="flex justify-start">
            <a onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                isStopped={stopped}
              />
            </a>
          </div>

          <div className="p-3" id="nav-links">
            <div className="flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]">
              <a href="#header-section">Home</a>
            </div>
            <div className="flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]">
              <a href="#events-section">Events</a>
            </div>
            <div className="flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]">
              <a href="#team-secion">Teams</a>
            </div>
            <div className="flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]">
              <a href="#sponsors-section">Sponsors</a>
            </div>
            <div className="flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]">
              <a href="#speaker-section">Speakers</a>
            </div>
          </div>
        </div>
      </div>
      {/* side bar */}
    </>
  );
}
