import Image from "next/image"
import thanksHeading from "../public/thanksHeading.svg"
import techStackLogos from "../public/techStackLogos.svg"
import topBlue from "../public/topBlue.svg"


export default function ThanksUpper(){
    return(
        <>
            <div className="flex flex-col md:flex-row md:flex mt-[3rem]">
                <div className="img1">
                <Image src={thanksHeading} height={300} />
                </div>
                <div className="img2">
                <Image src={techStackLogos} height={400} />
                </div>
            </div>
            {/* <div className="bottomImg">
                    <Image src={topBlue} />
                </div> */}
        </>
    )
}