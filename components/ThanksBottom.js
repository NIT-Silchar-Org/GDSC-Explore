import Image from "next/image"
import thanksHeading from "../public/thanksHeading.svg"
import techStackLogos from "../public/techStackLogos.svg"
import topBlue from "../public/topBlue.svg"

export default function ThanksUpper(){
    return(
        <div className="relative">
            <div id="bottomImg" className="relative rotate-180 top-[-1rem]">
                <Image src={topBlue} />
            </div>
            <div id="picHolder" className="absolute top-[7rem] h-[17.5rem] w-[17.5rem] bg-white   right-[20rem] rotate-[14deg]">
                <div className="picWrapper relative top-[1.7rem] left-[0.6rem] h-[15rem] w-[16rem] border border-black">
                    {/* <Image/> */}
                </div>
            </div>
        </div>
    )
}