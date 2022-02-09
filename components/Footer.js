import Image from 'next/image';
import GDSCexplore from '../public/gdscexplore.svg'
import Link from 'next/link';

export default function Footer() {
    return(
        <>
            <div className="relative py-14 flex flex-col top-[26rem] items-center md:py-14 md:flex md:top-[2rem] md:mb-[4rem] md:flex-col md:items-center md:w-1/2">
                <div className="flex flex-row justify-center">
                    <p>email us at </p>
                    <Link href={"/"}><p className="mr-1 px-1 text-indigo-600">example@gmail.com</p></Link>
                </div>
                <div className='w-40 py-4 pt-8'><Image src={GDSCexplore} className="w-8 h-8"/></div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-center text-[1.8rem] text-[#4F5356] font-bold mr-1 pb-2">GDSC EXPLORE</p>
                    <hr className="w-[8%] pt-3"></hr>
                    <Link href={"/"} >
                        <a className="pt-1">
                            <p className="text-[#737B7D] mr-1">Website Developers</p>
                        </a>
                    </Link>
                </div>
                <div className='hidden md:flex md:relative border-[1px] bg-black border-black h-[15rem] left-[15rem] top-[-16rem]'></div>
            </div>
            <div className='relative flex flex-col items-center top-[-24rem] md:relative md:flex-col md:items-center md:w-1/2 md:left-[30rem] md:top-[-38rem]'>
            <div className='text-[32px]'>
                Contact Us
            </div>
                <input type="text" className='relative w-[70%] h-9 rounded border-[1px] border-[#0176FA] px-2 top-[1rem] md:w-[15rem] md:h-9 md:top-[1rem] md:left-[2.5rem]' placeholder='First Name'/>
                <input type="text" className='relative w-[70%] h-9 rounded border-[1px] border-[#0176FA] px-2 top-[2rem] md:w-[15rem] md:h-9 md:top-[-1.25rem] md:left-[19rem]' placeholder='Last Name'/>
                <input type="text" className='relative w-[70%] h-9 rounded border-[1px] border-[#0176FA] px-2 top-[3rem] md:w-[31.6rem] md:h-9 md:top-[0rem] md:left-[10.75rem]' placeholder='Email ID'/>
                <textarea placeholder='Type Your Query Here' className='relative w-[70%] h-[10rem] rounded border-[1px] border-[#0176FA] px-2 py-1 top-[4rem] md:w-[31.6rem] md:h-[10rem] md:top-[1.5rem] md:left-[10.75rem]'></textarea>
                <button className="relative bg-[#3C64B1] rounded  text-base md:text-lg text-white w-[25%] md:top-[3rem] md:left-[1rem] top-[6rem] hover:shadow-xl ease-in-out duration-300 py-2 px-3 mr-2">
                Submit
                </button>
            </div>
        </>
    );
}