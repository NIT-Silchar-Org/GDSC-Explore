import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { SpeakersData } from "../../utils/speakersData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function CarouselNew() {
  return (

    <>
    <h1 className="text-[2rem] md:text-[48px] text-[#373F41] mb-[5rem] text-center mt-8">
          Speakers
    </h1>
    <div className=" flex justify-center ">
      <div className="md:w-[600px] w-[100vw]">
        <Carousel responsive={responsive}>
          {SpeakersData.map((i, index) => {
            return (
              <div key={index} className="w-full py-10 flex justify-center mx-5 ">
                <Card
                  name={i.name}
                  img={i.img}
                  title={i.title}
                  disable={false}
                  linkedIn={i.linkedIn}
                  twitter={""}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
    </>
  );
}
