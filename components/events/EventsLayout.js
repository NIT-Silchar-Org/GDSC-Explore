import Card from "./Card";
import { events } from "../../utils/eventsData";
import { useState } from "react";

export default function EventsLayout() {
  const [dayevents, setDayevents] = useState(events[0]);
  const [btnIndex, setBtnIndex] = useState(1);

  const changeCards = (index) => {
    setDayevents(events[index - 1]);
    setBtnIndex(index);
  };
  const days = [];
  for (let i = 1; i <= events.length; i++) {
    days.push(i);
  }

  return (
    <>
      <div className="container py-10 md:px-[5.5rem] px-[2rem]">
        <h1 className="text-start text-[2rem] md:text-[48px]  mb-5">Events</h1>
        {events.length != 0 ? (
          <>
            <div className="container mb-8" id="navbar">
              <div className="flex justify-start my-2 border-b-2 ">
                {days &&
                  days.map((day, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          btnIndex == day
                            ? "border-b-4 border-blue-500 py-3 mr-5 text-center px-3  text-black font-normal"
                            : " py-3 mr-5 text-center px-3 text-paragraphColor"
                        }
                        onClick={() => {
                          changeCards(day);
                        }}
                      >
                        <h1
                          className={
                            btnIndex == day
                              ? "text-[15px] md:text-[18px] "
                              : "text-[15px] md:text-[18px] hover:text-black hover:font-normal transition delay-75 ease-in-out hover:-translate-y-1"
                          }
                        >
                          Day {day}
                        </h1>
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="cards-layout">
              <div className="grid content-center grid-cols-1 md:grid-cols-3 gap-4 ">
                {dayevents &&
                  dayevents.map((event) => {
                    return <Card key={event.id} event={event} />;
                  })}
              </div>
            </div>
          </>
        ):(
          <>
          <hr/>
           <h1 className="text-2xl text-center my-4">We`&lsquo;`ll be updating soon...</h1>
          </>
         
        )}


      </div>
    </>
  );
}
