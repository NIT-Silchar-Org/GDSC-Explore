import Navbar from "../components/Navbar";
import ThanksUpper from "../components/ThanksUpper";
import ThanksBottom from "../components/ThanksBottom";
import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import {FiChevronsDown} from 'react-icons/fi';
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { SpeakersData } from "../utils/speakersData";
import mouseImg from "../public/images/mouse.png";

export default function ThankYou({ username }) {
  const [toggle, setToggle] = useState(false);
  const [speaker, setSpeaker] = useState(null);
  const [win, setWin] = useState(null);

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
    setWin(window)
  });




  const [visible, setVisible] = useState(true) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(false) 
    }  
    else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  };
  if(win){

    win.addEventListener('scroll', toggleVisible); 
  } 

  return (
    <div className="relative">
      <div className={visible ?"fixed w-full md:bottom-10 flex justify-center z-10":"hidden w-full bottom-10  justify-center z-10"} >
        <a href="#here" className="p-2 flex animate-bounce justify-center items-center rounded-full border-2 border-white bg-[#546CBF] shadow-md shadow-white/30" >
          <FiChevronsDown className="text-white text-5xl"  width="50" height="50"/>
        </a>
      </div>
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
        <div id="here">

        </div>
      </main>
    </div>
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
