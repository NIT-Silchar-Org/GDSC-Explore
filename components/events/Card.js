import Image from "next/image";
import navigateicon from "../../public/images/navigateIcon.png";
import Link from "next/link";

export default function Card({ event }) {
  return (
    <>
      <div
        className="bg-offWhite p-4 rounded-[4px] border-[1px] border-borderColor transition ease-in-out delay-75 hover:shadow-md hover:shadow-indigo-400/40"
        id="card"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          <div className="flex items-center">
            <div id="card-img">
              <Image src={event.img} />
            </div>
          </div>
          <div id="card-body" className="text-start my-3">
            <h1 className="text-black text-[17px] md:text-[24px] font-[300] leading-[22px] tracking-[0.3px]">
              {event.title}
            </h1>

            <p className=" text-[14px] md:text-[12px] font-[300] text-paragraphColor leading-[22px] tracking-[0.3px] my-5">
              {event.description}
            </p>
            <Link href={event.link}>
              <a className="flex justify-start items-center text-indigo-600">
                <p className="mr-1">Open</p>
                <Image src={navigateicon} className="w-8 h-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
