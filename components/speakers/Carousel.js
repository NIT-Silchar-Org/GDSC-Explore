import Card from "./Card";
import { BsCircleFill } from "react-icons/bs";
import { useState } from "react";
import { SpeakersData } from "../../utils/speakersData";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Carousel() {
  const [activeData, setActiveData] = useState(SpeakersData.slice(0, 3));

  const [activestartIndex, setActivestartIndex] = useState(0);
  const [activeendIndex, setActiveendIndex] = useState(3);

  const moveBack = () => {
    setActivestartIndex((prev) => {
      return prev - 1;
    });
    setActiveendIndex((prev) => {
      return prev - 1;
    });
  };
  const moveForward = () => {
    setActivestartIndex((prev) => {
      return prev + 1;
    });
    setActiveendIndex((prev) => {
      return prev + 1;
    });
  };
  var clsName = "";
  if (SpeakersData.length == 1) {
    clsName =
      "carousel-inner grid md:grid-cols-1 gap-4 grid-cols-1 h-[255px] overflow-hidden";
  } else if (SpeakersData.length == 2) {
    clsName =
      "carousel-inner grid md:grid-cols-2 gap-4 grid-cols-1 h-[255px] overflow-hidden";
  } else {
    clsName =
      "carousel-inner grid md:grid-cols-3 gap-4 grid-cols-1 h-[255px] overflow-hidden";
  }

  return (
    <>
      <div className="py-14 ">
        <h1 className="text-[2rem] md:text-[48px] text-[#373F41] mb-[5rem] text-center">
          Speakers
        </h1>
        <div className="w-full px-4 flex justify-center">
          <div id="carousel" className="flex justify-center items-center">
            {activestartIndex > 0 ? (
              <button onClick={moveBack}>
                <IoIosArrowBack className="text-4xl mr-4" />
              </button>
            ) : (
              <button onClick={moveBack} disabled className="text-white">
                <IoIosArrowBack className="text-4xl mr-4" />
              </button>
            )}
            <div className={clsName}>
              {SpeakersData.slice(activestartIndex, activeendIndex).map(
                (i, index) => {
                  return (
                    <div key={index} className="carousel-item  md:block mx-2">
                      <Card
                        name={i.name}
                        title={i.title}
                        disable={false}
                        linkedIn={"hello"}
                        twitter={""}
                      />
                    </div>
                  );
                }
              )}

              <div className="carousel-item md:hidden mx-2">
                <Card
                  name={SpeakersData[activestartIndex + 1].name}
                  title={SpeakersData[activestartIndex + 1].title}
                  disable={false}
                  linkedIn={"hello"}
                  twitter={""}
                />
              </div>
              {SpeakersData.length > 3 &&(
                  <div className="carousel-item  md:hidden mx-2">
                  <Card
                    name={SpeakersData[activestartIndex + 2].name}
                    title={SpeakersData[activestartIndex + 2].title}
                    disable={false}
                    linkedIn={"hello"}
                    twitter={""}
                  />
                </div>
              )}
            </div>

            {activeendIndex <= SpeakersData.length+1 ? (
              <button onClick={moveForward}>
                <IoIosArrowForward className="text-4xl ml-4" />
              </button>
            ) : (
              <button onClick={moveForward} disabled className="text-white">
                <IoIosArrowForward className="text-4xl ml-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
