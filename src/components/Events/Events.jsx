import "./Events.css";
import { Suspense, lazy } from "react";
import wedding from "../../images/Events/Wedding.webp";
import anniversary from "../../images/Events/Anniversary.webp";
import birthday from "../../images/Events/Birthday.webp";
import theme from "../../images/Events/Theme.webp";
import proposal from "../../images/Events/Proposal.webp";
import baby from "../../images/Events/Baby.webp";
import mundan from "../../images/Events/Mundan.webp";
import haldi from "../../images/Events/Haldi.JPG.webp";
import bride from "../../images/Events/Bride.webp";
import "animate.css";
import AOS from "aos";
const EventsCard = lazy(() => import("../EventsCard/EventsCard"));

function Events() {
  AOS.init({
    duration: 1000
  });
  return (
    <div className="Events">
      <h1 data-aos="fade-up" data-aos-delay="100">
        Choose Your Event
      </h1>
      <div className="cards__event">
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={wedding} title="Wedding Event" delayInEvents={200}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={anniversary} title="Anniversary Event" delayInEvents={400}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={haldi} title="Haldi Event" delayInEvents={600}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={birthday} title="Birthday Event" delayInEvents={200}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={mundan} title="Mundan Event" delayInEvents={400}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={bride} title="Bride Event" delayInEvents={600}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={theme} title="Theme Based" delayInEvents={200}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={proposal} title="Proposal Suprise" delayInEvents={400}/> </Suspense>
        <Suspense fallback={<div>loading...</div>}><EventsCard imgsrc={baby} title="Baby Shower" delayInEvents={600}/> </Suspense>
      </div>
    </div>
  );
}

export default Events;
