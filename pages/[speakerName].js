import Navbar from "../components/Navbar";
import ThanksUpper from "../components/ThanksUpper";
import ThanksBottom from "../components/ThanksBottom";
import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { SpeakersData } from "../utils/speakersData";

export default function ThankYou({ username }) {
  const [toggle, setToggle] = useState(false);
  const [speaker, setSpeaker] = useState(null);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const checkpoint = 300;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        var opacity = 1 - currentScroll / checkpoint;
      } else {
        opacity = 0;
      }
      document.querySelector("#front").style.opacity = opacity;
    });
  });

  useEffect(() => {
    setSpeaker(
      SpeakersData.find((skr) => {
        return skr.username === username;
      })
    );
  });

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />

      <main className={toggle ? "h-[80vh] overflow-hidden" : ""}>
        <div className="hidden md:block">
          <Parallax speed={-50}>
            <div className="thanks-top mt-10 md:mt-80 block md:block" id="front">
              <ThanksUpper />
            </div>
          </Parallax>

          <Parallax speed={-90}>
            <div className="thanks-bottom mt-10 md:mt-80">
              {speaker && <ThanksBottom  img={speaker.img} name={speaker.name} gender ={speaker.gender} />}
            </div>
          </Parallax>
        </div>
        <div className="block md:hidden">

            <div className="thanks-top mt-10 md:mt-80 block md:block" id="front">
              <ThanksUpper />
            </div>
          
            <div className="thanks-bottom mt-10 md:mt-80">
              {speaker && <ThanksBottom img={speaker.img} name={speaker.name} gender ={speaker.gender} />}
            </div>
     
        </div>

        {/* <div className="block md:hidden">
        
          <div className="thanks-top md:mt-80" id="front">
            <ThanksUpper />
          </div>
   

 
          <div className="thanks-bottom md:mt-80">
            {speaker && <ThanksBottom img={speaker.img} />}
          
          </div>
   
        </div> */}
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const username = context.params.speakerName;
  return {
    props: {
      username,
    },
  };
}
