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

function Events() {
  return (
    <div className="Events">
      <h3>Choose Your Event</h3>
      <div className="event_container">
        <div className="event first">
          <div className="image_cont">
            <img src={wedding} alt="" />
          </div>
          <div className="detail">
            <h6>Wedding Event</h6>
            <p>Explore our wedding event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event second">
          <div className="image_cont">
            <img src={anniversary} alt="" />
          </div>
          <div className="detail">
            <h6>Anniversary Event</h6>
            <p>Explore our anniversary event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event third">
          <div className="image_cont">
            <img src={haldi} alt="" />
          </div>
          <div className="detail">
            <h6>Haldi Event</h6>
            <p>Explore our haldi event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event fourth">
          <div className="image_cont">
            <img src={theme} alt="" />
          </div>
          <div className="detail">
            <h6>Theme Party</h6>
            <p>Explore our theme based event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event fifth">
          <div className="image_cont">
            <img src={birthday} alt="" />
          </div>
          <div className="detail">
            <h6>Birthday Parties</h6>
            <p>Explore our birthday decoration prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event sixth">
          <div className="image_cont">
            <img src={bride} alt="" />
          </div>
          <div className="detail">
            <h6>Bride Celebration</h6>
            <p>Explore our bride event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event seventh">
          <div className="image_cont">
            <img src={mundan} alt="" />
          </div>
          <div className="detail">
            <h6>Mundan Event</h6>
            <p>Explore our mundan event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event eighth">
          <div className="image_cont">
            <img src={baby} alt="" />
          </div>
          <div className="detail">
            <h6>Baby Shower</h6>
            <p>Explore our baby shower event prices.</p>
            <button>Click</button>
          </div>
        </div>
        <div className="event nineth">
          <div className="image_cont">
            <img src={proposal} alt="" />
          </div>
          <div className="detail">
            <h6>Proposal Decoration</h6>
            <p>Explore our proposal decoration prices.</p>
            <button>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
