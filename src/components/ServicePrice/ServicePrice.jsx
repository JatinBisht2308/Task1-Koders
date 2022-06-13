import React from "react";
import aniv_img1 from "../../images/25anniversary_1.jpg";
import aniv_img2 from "../../images/25anniversary_2.jpg";
import aniv_img3 from "../../images/25anniversary_3.jpg";
import aniv_img4 from "../../images/25anniversary_4.jpg";
import bs_img1 from "../../images/babyshower_1.jpg";
import bs_img2 from "../../images/babyshower_2.jpg";
import bs_img3 from "../../images/babyshower_3.jpg";
import bs_img4 from "../../images/babyshower_4.jpg";
import bs_img5 from "../../images/babyshower_5.jpg";
import bs_img6 from "../../images/babyshower_6.jpg";
import bs_img7 from "../../images/babyshower_7.jpg";
import bs_img8 from "../../images/babyshower_8.jpg";
import bday_img1 from "../../images/birthday_1.jpg";
import bday_img2 from "../../images/birthday_2.jpg";
import bday_img3 from "../../images/birthday_3.jpg";
import bday_img4 from "../../images/birthday_4.jpg";
import bday_img5 from "../../images/birthday_5.jpg";
import bday_img6 from "../../images/birthday_6.jpg";
import bday_img7 from "../../images/birthday_7.jpg";
import bday_img8 from "../../images/birthday_8.jpg";
import bday_img9 from "../../images/birthday_9.jpg";
import bday_img10 from "../../images/birthday_10.jpg";
import brs_img1 from "../../images/bridalshower_1.jpg";
import brs_img2 from "../../images/bridalshower_2.jpg";
import brs_img3 from "../../images/bridalshower_3.jpg";
import brs_img4 from "../../images/bridalshower_4.jpg";
import brs_img5 from "../../images/bridalshower_5.jpg";
import canopy_1 from "../../images/canopy_1.jpg";
import canopy_2 from "../../images/canopy_2.jpg";
import canopy_3 from "../../images/canopy_3.jpg";
import canopy_4 from "../../images/canopy_4.jpg";
import mundan_1 from "../../images/mundan_1.jpg";
import mundan_2 from "../../images/mundan_2.jpg";
import mundan_3 from "../../images/mundan_3.jpg";
import mundan_4 from "../../images/mundan_4.jpg";
import mundan_5 from "../../images/mundan_5.jpg";
import proposal_1 from "../../images/proposal_1.jpg";
import proposal_2 from "../../images/proposal_2.jpg";
import roomdecor_1 from "../../images/roomdecor_1.jpg";
import roomdecor_2 from "../../images/roomdecor_2.jpg";
import roomdecor_3 from "../../images/roomdecor_3.jpg";
import roomdecor_4 from "../../images/roomdecor_4.jpg";
const ServicePrice = () => {
  return <div className="ServicePrice">
   <Navbar />
      <ServicePriceIndividual
        ServiceEventName = "Wedding Event"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto est ut exercitationem ex nobis dolorem magnam nesciunt enim a!"
        EventImageArray = {[mundan_1,roomdecor_1,brs_img1,aniv_img2]}
      />
      <Footer />
  </div>;
};

export default ServicePrice;
