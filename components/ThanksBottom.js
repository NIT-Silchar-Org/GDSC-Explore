import Image from "next/image";
import topBlue from "../public/topBlue.svg";
import message from "../public/images/email.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useEffect } from "react";

export default function ThanksUpper({ img ,name, gender}) {
  const variants = {
    hidden: { scale: 0.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
  };

  return (
    <div className="relative">
      <Parallax speed={50}>
        <div
          id="bottomImg"
          className="absolute hidden md:block md:top-[-8rem]  z-[-1]"
        >
          <Image src={topBlue} />
        </div>
      </Parallax>
      <Parallax speed={60}>
        <div
          id="bottomImg"
          className="absolute hidden md:block rotate-180  md:top-[20rem] z-[-1]"
        >
          <Image src={topBlue} />
        </div>
      </Parallax>
      {/* <Parallax speed={60}> */}

      <div className="card absolute top-[4vh] md:relative hidden md:block md:mt-0 ">
        <motion.div
          className="card-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={variants}>
            <div className="flex flex-col items-center md:flex-row-reverse md:justify-around md:items-start mt-10">
              <div
                id="picHolder"
                className="mt-[3rem] md:mt-[7rem] h-[17.5rem] w-[17.5rem] bg-white   rotate-[12deg]"
              >
                <div className="picWrapper relative top-[1.7rem] left-[0.6rem] h-[15rem] w-[16rem] border border-black">
                  {/* <Image/> */}
                  <Image src={img} />
                </div>
              </div>
              <div className="mt-[4rem] h-[50rm] w-[30rem] rotate-[-8deg]">
                <Image src={message} />
                <div className="absolute top-[3.3rem] left-[3rem] h-[10rem] w-[25rem] bg-transparent">
                  <p className="text-lg">Letter of thanks</p>
                </div>
                <div className="absolute top-[8.5rem] left-[2.8rem] h-[10rem] w-[25rem] bg-transparent">
                  <p className="font-thin text-sm ">
                  Hello {name} {gender}, 

We the members of the entire GDSC Explore team, want to convey our thanks to you for taking time off your busy schedule and being present in our event as the guest speaker. Your words of wisdom stirred our hearts and mind for a better cause. All thanks to your enlightening words of inspiration that the event was such a huge success.

I also convey sincere thanks on behalf of the attendees who were thrilled to have you share your experiences, guidance and also to resolve some of the queries most face at some point or the other. No words will be enough to express our gratitude to you for gracing our event and stimulating our minds with creativeness and hearts with a desire to grow. 

We are eagerly looking forward to our next interaction soon. We would pray for your well being and success in all endeavours and walks of life. 

Regards, 
Team GDSC Explore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      <div className="card absolute block md:hidden top-[4vh] md:relative md:mt-0 w-full  px-10">
        <motion.div
          className="card-container"
          initial="hidden"
          whileInView="visible"
          
        >
          <motion.div variants={variants}>
            <div className="flex flex-col items-center md:flex-row-reverse md:justify-around md:items-start mt-10">
              <div
                id="picHolder"
                className="mt-[3rem] md:mt-[7rem] h-[17.5rem] w-[17.5rem] bg-white   rotate-[12deg]"
              >
                <div className="picWrapper relative top-[1.7rem] left-[0.6rem] h-[15rem] w-[16rem] border border-black">
                  {/* <Image/> */}
                  <Image src={img} />
                </div>
              </div>
              <div className="mt-[4rem] h-[50rm] w-[23rem] rotate-[-8deg]">
                <Image src={message} />
                <div className="absolute top-[2.5rem] left-[3rem] h-[10rem] w-[18rem] bg-transparent">
                  <p className="text-lg">THANK YOU</p>
                </div>
                <div className="absolute top-[7.5rem] left-[2.8rem] h-[10rem] w-[18rem] bg-transparent">
                  <p className="font-thin text-sm">
                  Hello {name} {gender}, 

We the members of the entire GDSC Explore team, want to convey our thanks to you for taking time off your busy schedule and being present in our event as the guest speaker. Your words of wisdom stirred our hearts and mind for a better cause. All thanks to your enlightening words of inspiration that the event was such a huge success.

I also convey sincere thanks on behalf of the attendees who were thrilled to have you share your experiences, guidance and also to resolve some of the queries most face at some point or the other. No words will be enough to express our gratitude to you for gracing our event and stimulating our minds with creativeness and hearts with a desire to grow. 

We are eagerly looking forward to our next interaction soon. We would pray for your well being and success in all endeavours and walks of life. 

Regards, 
Team GDSC Explore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>



      {/* </Parallax> */}

      {/* <div className="card  block md:hidden p-10">
        <div className="flex flex-col items-center md:flex-row-reverse md:justify-around md:items-start mt-10">
          <div
            id="picHolder"
            className="mt-[3rem] md:mt-[7rem] h-[17.5rem] w-[17.5rem] bg-white   rotate-[12deg]"
          >
            <div className="picWrapper relative top-[1.7rem] left-[0.6rem] h-[15rem] w-[16rem] border border-black">
          
              <Image src={img} />
            </div>
          </div>
          <div className="mt-[4rem] h-[50rm] w-[100%] md:w-[30rem] rotate-[-8deg]">
            <Image src={message} />
            <div className="absolute top-[1.4rem] md:top-[3.3rem] left-[1rem] md:left-[3rem] h-[10rem] w-[100%] md:w-[25rem] bg-transparent">
              <p className="text-lg">THANK YOU</p>
            </div>
            <div className="absolute top-[6.5rem] md:top-[8.5rem] left-[0.8rem] px-5 md:px-0 md:left-[2.8rem] h-[10rem] w-[100%]  md:w-[25rem] bg-transparent">
              <p className="font-thin text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt tellus neque diam, sed. Cursus malesuada elementum
                integer purus posuere bibendum velit. Gravida malesuada posuere
                lectus faucibus congue mattis. Platea aliquet et porta at.
                Vestibulum, neque, suspendisse elit turpis vulputate egestas
                vitae proin pellentesque. Elit tellus integer sit pellentesque
                malesuada velit. Odio velit, quis dolor sodales dignissim. Sed
                in pretium in purus. Gravida quis massa adipiscing pellentesque
                lacus amet ut facilisi.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      
    </div>
  );
}
