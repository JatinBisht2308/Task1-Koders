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

function Events() {
  return (
    <div className="Events">
      <h1>Choose Your Event</h1>
      <div className="cards__event">
      <EventsCard imgsrc={wedding} title="Wedding Event" />
      <EventsCard imgsrc={anniversary} title="Anniversary Event" />
      <EventsCard imgsrc={haldi} title="Haldi Event" />
      <EventsCard imgsrc={birthday} title="Birthday Event" />
      <EventsCard imgsrc={mundan} title="Mundan Event" />
      <EventsCard imgsrc={bride} title="Bride Event" />
      <EventsCard imgsrc={theme} title="Theme Based" />
      <EventsCard imgsrc={proposal} title="Proposal Suprise" />
      <EventsCard imgsrc={baby} title="Baby Shower" />
      </div>
    </div>
  );
}

export default Events;
