import "./Events.css";
import wedding from "../../images/Events/Wedding.jpg";
import anniversary from "../../images/Events/Anniversary.jpg";
import birthday from "../../images/Events/Birthday.jpg";
import theme from "../../images/Events/Theme.jpg";
import proposal from "../../images/Events/Proposal.jpg";
import baby from "../../images/Events/Baby.jpg";
import mundan from "../../images/Events/Mundan.jpg";
import haldi from "../../images/Events/Haldi.JPG";
import bride from "../../images/Events/Bride.jpg";
import deco from "../../images/Events/event_last.jpg";
import EventsCard from "../EventsCard/EventsCard";
import "animate.css";
import AOS from "aos";

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
        <EventsCard imgsrc={wedding} title="Wedding Event" delayInEvents={200}/>
        <EventsCard imgsrc={anniversary} title="Anniversary Event" delayInEvents={400}/>
        <EventsCard imgsrc={haldi} title="Haldi Event" delayInEvents={600}/>
        <EventsCard imgsrc={birthday} title="Birthday Event" delayInEvents={200}/>
        <EventsCard imgsrc={mundan} title="Mundan Event" delayInEvents={400}/>
        <EventsCard imgsrc={bride} title="Bride Event" delayInEvents={600}/>
        <EventsCard imgsrc={theme} title="Theme Based" delayInEvents={200}/>
        <EventsCard imgsrc={proposal} title="Proposal Suprise" delayInEvents={400}/>
        <EventsCard imgsrc={baby} title="Baby Shower" delayInEvents={600}/>
      </div>
    </div>
  );
}

export default Events;
