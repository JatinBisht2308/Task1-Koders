import "./Serve.css";
import about_us_serve from "../../images/about_us_serve.jpg";
import {RiHeartsFill} from 'react-icons/ri'
function Serve() {
    return(
         <div className="Serve">
             <div className="Serve-Container">
                 <div className="left-serve">
                     <h2>Let us serve you the best...</h2>
                     <p>As per customer requirements.. we serve the best in clients budget.. we are not here to earn only, we are here to make someone's dream event true.</p>
                     <h4>We are here to make families..    <RiHeartsFill style={{color: 'red', fontSize: '100%'}}/></h4>
                 </div>
                 <div className="right-serve">
                     <img src={about_us_serve} alt="" />
                 </div>
             </div>
         </div>
    );
}

export default Serve;