import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Card({ name, img, title, disable, twitter, linkedIn }) {
  return (
    <>
    
    
        <div className={disable?"py-6 px-4 w-[200px] min-h-[275px] rounded-md bg-white shadow-md ":"py-6 px-4 w-[200px] min-h-[275px] rounded-md bg-white shadow-xl "}>
          <div className="w-full flex justify-center">
            <div className="rounded-full h-20 w-20 bg-gray-600"><Image src={img} className="rounded-full"/></div>
          </div>
          <h1 className="text-lg text-center my-2">{name}</h1>
          <p className="text-xs text-center">{title}</p>

          <div className="flex justify-center mt-4">
            {disable ? (
              <>
                <button
                  className="rounded-full h-8 w-8 bg-gray-300 mr-2 text-center p-2"
                  disabled
                >
                  <BsLinkedin />
                </button>
                {/* <button
                  className="rounded-full h-8 w-8 bg-gray-300 ml-2 text-center p-2"
                  disabled
                >
                  <BsTwitter />
                </button> */}
              </>
            ) : (
              <>
                <Link href={`${linkedIn}`}>
                    <button className="rounded-full h-8 w-8 bg-gray-300 mr-2 text-center p-2 ease-in-out duration-300 hover:text-indigo-700">
                    <BsLinkedin />
                    </button>
                </Link>
                {/* <Link href={`${twitter}`}>
                    <button className="rounded-full h-8 w-8 bg-gray-300 ml-2 text-center p-2 ease-in-out duration-300 hover:text-indigo-700">
                    <BsTwitter />
                    </button>
                </Link> */}
              </>
            )}
          </div>
        </div>

    </>
  );
}
