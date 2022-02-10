import Image from "next/image"
import thanksHeading from "../public/thanksHeading.svg"
import techStackLogos from "../public/techStackLogos.svg"
import topBlue from "../public/topBlue.svg"
import message from "../public/images/email.svg"
import { motion } from 'framer-motion'

export default function ThanksUpper(){

    const variants={
        hidden:{scale: 0.1, opacity: 0},
        visible:{scale: 1, opacity: 1, transition:{delay: .4}},
    };

    return(
        <div className="relative">
            <div id="bottomImg" className="relative rotate-180 top-[-1rem]">
                <Image src={topBlue} />
            </div>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <div className="absolute top-[4rem] h-[50rm] w-[30rem] right-[45rem] rotate-[-8deg]">
                    <Image src={message} />
                    <div className="absolute top-[3.3rem] left-[3rem] h-[10rem] w-[25rem] bg-transparent">
                        <p className="text-lg">THANK YOU</p>
                    </div>
                    <div className="absolute top-[8.5rem] left-[2.8rem] h-[10rem] w-[25rem] bg-transparent">
                        <p className="font-thin text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tellus neque diam, sed. Cursus malesuada elementum integer purus posuere bibendum velit. Gravida malesuada posuere lectus faucibus congue mattis. Platea aliquet et porta at. Vestibulum, neque, suspendisse elit turpis vulputate egestas vitae proin pellentesque. Elit tellus integer sit pellentesque malesuada velit. Odio velit, quis dolor sodales dignissim. Sed in pretium in purus. Gravida quis massa adipiscing pellentesque lacus amet ut facilisi.</p>
                    </div>
                </div>
                <div id="picHolder" className="absolute top-[7rem] h-[17.5rem] w-[17.5rem] bg-white   right-[20rem] rotate-[12deg]">
                    <div className="picWrapper relative top-[1.7rem] left-[0.6rem] h-[15rem] w-[16rem] border border-black">
                        {/* <Image/> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}