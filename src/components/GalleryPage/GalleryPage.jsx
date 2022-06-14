import React from "react";
import LandingScreen from "../LandingScreen/LandingScreen";
import Navbar from "../Navbar/Navbar";
import "./GalleryPage.css";
import gallery_main from "../../images/gallery_main.webp";
import Footer from "../Footer/Footer";
import GalleryPart from "../GalleryPart/GalleryPart";
import aniv_img1 from "../../images/25anniversary_1.webp";
import aniv_img2 from "../../images/25anniversary_2.webp";
import aniv_img3 from "../../images/25anniversary_3.webp";
import aniv_img4 from "../../images/25anniversary_4.webp";
import bs_img1 from "../../images/babyshower_1.webp";
import bs_img2 from "../../images/babyshower_2.webp";
import bs_img3 from "../../images/babyshower_3.webp";
import bs_img4 from "../../images/babyshower_4.webp";
import bs_img5 from "../../images/babyshower_5.webp";
import bs_img6 from "../../images/babyshower_6.webp";
import bs_img7 from "../../images/babyshower_7.webp";
import bs_img8 from "../../images/babyshower_8.webp";
import bday_img1 from "../../images/birthday_1.webp";
import bday_img2 from "../../images/birthday_2.webp";
import bday_img3 from "../../images/birthday_3.webp";
import bday_img4 from "../../images/birthday_4.webp";
import bday_img5 from "../../images/birthday_5.webp";
import bday_img6 from "../../images/birthday_6.webp";
import bday_img7 from "../../images/birthday_7.webp";
import bday_img8 from "../../images/birthday_8.webp";
import bday_img9 from "../../images/birthday_9.webp";
import bday_img10 from "../../images/birthday_10.webp";
import brs_img1 from "../../images/bridalshower_1.webp";
import brs_img2 from "../../images/bridalshower_2.webp";
import brs_img3 from "../../images/bridalshower_3.webp";
import brs_img4 from "../../images/bridalshower_4.webp";
import brs_img5 from "../../images/bridalshower_5.webp";
import canopy_1 from "../../images/canopy_1.webp";
import canopy_2 from "../../images/canopy_2.webp";
import canopy_3 from "../../images/canopy_3.webp";
import canopy_4 from "../../images/canopy_4.webp";
import mundan_1 from "../../images/mundan_1.webp";
import mundan_2 from "../../images/mundan_2.webp";
import mundan_3 from "../../images/mundan_3.webp";
import mundan_4 from "../../images/mundan_4.webp";
import mundan_5 from "../../images/mundan_5.webp";
import proposal_1 from "../../images/proposal_1.webp";
import proposal_2 from "../../images/proposal_2.webp";
import roomdecor_1 from "../../images/roomdecor_1.webp";
import roomdecor_2 from "../../images/roomdecor_2.webp";
import roomdecor_3 from "../../images/roomdecor_3.webp";
import roomdecor_4 from "../../images/roomdecor_4.webp";
import { v4 as uuidv4 } from "uuid";

function GalleryPage() {
  return (
    <div
      className="GalleryPage"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <Navbar />
      <LandingScreen
        title="Gallery"
        imgsrc={gallery_main}
        desc="Here in the gallery section we have our some of the works sample to make an easy decision for you. We have almost every kind of event decoration system to make your event memorable in a very reasonable price. "
      />
      <div className="gallery_section">
        <GalleryPart
          images={[aniv_img1, aniv_img2, aniv_img3, aniv_img4]}
          name="anniv"
          text="25th Anniversary"
        />
        <GalleryPart
          images={[
            bs_img1,
            bs_img2,
            bs_img3,
            bs_img4,
            bs_img5,
            bs_img6,
            bs_img7,
            bs_img8,
          ]}
          name="bshower"
          text="Baby Shower"
          delayInGallery={200}
        />
        <GalleryPart
          images={[
            bday_img1,
            bday_img2,
            bday_img3,
            bday_img4,
            bday_img5,
            bday_img6,
            bday_img7,
            bday_img8,
            bday_img9,
            bday_img10,
          ]}
          name="birthday"
          text="Birthday Decor"
          delayInGallery={200}
        />
        <GalleryPart
          images={[brs_img1, brs_img2, brs_img3, brs_img4, brs_img5]}
          name="brshower"
          text="Bridal Shower"
          delayInGallery={300}
        />
        <GalleryPart
          images={[canopy_1, canopy_2, canopy_3, canopy_4]}
          name="canopy"
          text="Canopy Setup"
          delayInGallery={400}
        />
        <GalleryPart
          images={[mundan_1, mundan_2, mundan_3, mundan_4, mundan_5]}
          name="mundan"
          text="Mundan Decor"
          delayInGallery={500}
        />
        <GalleryPart
          images={[proposal_1, proposal_2]}
          name="proposal"
          text="Proposal"
          delayInGallery={600}
        />
        <GalleryPart
          images={[roomdecor_1, roomdecor_2, roomdecor_3, roomdecor_4]}
          name="roomdecor"
          text="Room Decor"
          delayInGallery={700}
        />
      </div>
      <Footer />
    </div>
  );
}

export default GalleryPage;
