
import EventsLayout from '../components/events/EventsLayout'
import Speakers from '../components/speakers/Carousel'
import Sponsors from '../components/Sponsors'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import NewHeader from '../components/NewHeader'
import Ourteam from '../components/ourteam'
import Navbar from '../components/Navbar'
import LowerHeader from '../components/LowerHeader'
import { useState } from 'react'


export default function Home() {
  const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => {
    setToggle(!toggle);
  }

  return (
    <div>

      <Navbar toggleSidebar={toggleSidebar} />

      <main className={toggle ? 'h-[80vh] overflow-hidden':""}>
      <div id="header-section">
        <NewHeader/>
      </div>
      <div id='LowerHeader'>
        <LowerHeader/>
      </div>
      <div id="events-section">
         <EventsLayout/>
      </div>
      <div id='team-secion'>
        <Ourteam/>
      </div>
      <div id="speaker-section">
        <Speakers/>
      </div>
      <div id="sponsors-section">
        <Sponsors/>
      </div>
      <div id="faq-section">
        <Faq/>
      </div>
      <div id="footer-section">
        <Footer/>
      </div>

      </main>
    </div>
  )
}
