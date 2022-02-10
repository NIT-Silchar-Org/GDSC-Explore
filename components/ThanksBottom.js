import Image from "next/image"
import topBlue from "../public/topBlue.svg"
import message from "../public/images/email.svg"
import { motion } from 'framer-motion'

export default function ThanksUpper(){

    const variants={
        hidden:{scale: 0.1, opacity: 0},
        visible:{scale: 1, opacity: 1, transition:{delay: .7}},
    };

    return(
        <div className="relative">
            <div id="bottomImg" className="absolute rotate-180 top-[-1rem] z-[-1]">
                <Image src={topBlue} />
            </div>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <div className="flex flex-col items-center md:flex-row-reverse md:justify-around md:items-start">
                    <div id="picHolder" className="mt-[3rem] md:mt-[7rem] h-[17.5rem] w-[17.5rem] bg-white   rotate-[12deg]">
                        <div className="picWrapper relative top-[1.7rem] left-[0.6rem] h-[15rem] w-[16rem] border border-black">
                            {/* <Image/> */}
                        </div>
                    </div>
                    <div className="mt-[4rem] h-[50rm] w-[30rem] rotate-[-8deg]">
                        <Image src={message} />
                        <div className="absolute top-[3.3rem] left-[3rem] h-[10rem] w-[25rem] bg-transparent">
                            <p className="text-lg">THANK YOU</p>
                        </div>
                        <div className="absolute top-[8.5rem] left-[2.8rem] h-[10rem] w-[25rem] bg-transparent">
                            <p className="font-thin text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tellus neque diam, sed. Cursus malesuada elementum integer purus posuere bibendum velit. Gravida malesuada posuere lectus faucibus congue mattis. Platea aliquet et porta at. Vestibulum, neque, suspendisse elit turpis vulputate egestas vitae proin pellentesque. Elit tellus integer sit pellentesque malesuada velit. Odio velit, quis dolor sodales dignissim. Sed in pretium in purus. Gravida quis massa adipiscing pellentesque lacus amet ut facilisi.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}