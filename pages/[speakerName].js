import Navbar from "../components/Navbar";
import ThanksUpper from "../components/ThanksUpper";
import ThanksBottom from "../components/ThanksBottom";
import { useState } from 'react'

export default function ThankYou(){
    const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => {
    setToggle(!toggle);
  }
    return(
        <>
            <Navbar toggleSidebar={toggleSidebar} />

            <main className={toggle ? 'h-[80vh] overflow-hidden':""}>
            <div className="thanks-top">
               {/* <ThanksUpper /> */}
            </div>
            <div className="thanks-bottom">
                <ThanksBottom/>
            </div>
            </main>
        </>
    )
}