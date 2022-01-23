import Image from 'next/image'
import Sp from '../public/sponsors/sponsor.svg'

export default function Faq() {
    return(
        <>
            <div className="py-14">
                <div className="w-full flex flex-col py-14 items-center justify-center bg-[#F9F9F9]">
                    <h1 className="text-start text-[2rem] md:text-[48px] text-[#373F41] mb-5 text-center">Our Sponsors</h1>
                    <div className="h-auto md:w-[50%] font-thin text-[#737B7D] text-[1rem] md:text-[1.5rem] text-center">
                        <br/>
                        <Image src={Sp} className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </>
    );
}