import "./Serve.css";
import about_us_serve from "../../images/Events/Proposal_2.jpg";
import { RiHeartsFill } from "react-icons/ri";
function Serve() {
  return (
    <div className="Serve">
      <div className="Serve-Container">
        <div className="left-serve ">
          <h2>Let us serve you the best...</h2>
          <p>
            As per customer requirements.. we serve the best in clients budget..
            we are not here to earn only, we are here to make someone's dream
            event true. Lahar Events also provide wedding catering and styling
            for different events.
          </p>
          <p>
            Offering wedding planning, styling and catering all under one roof.
            We operate from our beautiful wedding showroom on the beachfront.We
            have an incredible portfolio of Lahar Events wedding venues and
            pricing to suit all budgets.
          </p>
          <h4>
            We are here to make families..
            <RiHeartsFill style={{ color: "red", fontSize: "100%" }} />
          </h4>
        </div>
        <div className="right-serve ">
          <div className="right-serve-image">
            <img src={about_us_serve} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serve;
