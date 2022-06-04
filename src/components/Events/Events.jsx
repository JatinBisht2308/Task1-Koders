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
import deco from "../../images/Events/event_last.jpg"

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
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event second">
          <div className="image_cont">
            <img src={anniversary} alt="" />
          </div>
          <div className="detail">
            <h6>Anniversary Event</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event third">
          <div className="image_cont">
            <img src={haldi} alt="" />
          </div>
          <div className="detail">
            <h6>Haldi Event</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event fourth">
          <div className="image_cont">
            <img src={theme} alt="" />
          </div>
          <div className="detail">
            <h6>Theme Party</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event fifth">
          <div className="image_cont">
            <img src={birthday} alt="" />
          </div>
          <div className="detail">
            <h6>Birthday Parties</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event sixth">
          <div className="image_cont">
            <img src={bride} alt="" />
          </div>
          <div className="detail">
            <h6>Bride Celebration</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event seventh">
          <div className="image_cont">
            <img src={mundan} alt="" />
          </div>
          <div className="detail">
            <h6>Mundan Event</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event eighth">
          <div className="image_cont">
            <img src={baby} alt="" />
          </div>
          <div className="detail">
            <h6>Baby Shower</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
        <div className="event nineth">
          <div className="image_cont">
            <img src={proposal} alt="" />
          </div>
          <div className="detail">
            <h6>Proposal Decoration</h6>
            <div className="sub_detail">
              <p>“A happy marriage is union<br></br>of two good forgivers.” <br></br>– Robert Quillen </p>
               <button>Check</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
