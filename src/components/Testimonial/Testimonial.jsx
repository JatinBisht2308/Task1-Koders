import React from "react";
import "./Testimonial.css";
import { v4 as uuidv4 } from "uuid";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import AOS from "aos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AVTR1 from "../../images/avatar3.png";
import AVTR2 from "../../images/avatar1.png";

// Review data array of the users starts here
const review = [
  {
    avatar: AVTR2,
    name: "Bindiya Asija",
    reviewFirstHalf:
      "Thanks to Lahar events team. They helped us a lot to execute our vision to reality. All very really helpful and accommodating to our wishes. They are affordable, worth every money we spent. Thank you!",
    reviewSecondHalf:
      " The work goes smoothly all becuase of them Thanks to the team Isha and Lahar Events probably the best event management team in Dehardun.",
  },
  {
    avatar: AVTR1,
    name: "Mohit Joshi",
    reviewFirstHalf:
      "So finally sharing my feeling and experience with Lahar Events,almost a month since the marriage. First and foremost sincere thanks to teamwork of Isha and Sajan for being there and taking care of everything, I can recall being so nervous about the prep",
    reviewSecondHalf:
      "work that would go into the actual setup for the marriage, but then from word of friend was able to reach out to Lahar Events. Isha was so easy to connect over phone and would give such beautiful decor ideas that I could start imagining the actual setup",
  },
  {
    avatar: AVTR2,
    name: "Tanya Singh",
    reviewFirstHalf:
      "Wokring with Lahar events is so smooth. They're efficient with their work, creative and budget friendly. I particularly asked them to customise my piece of design and they did it. Totally Recommend for event decorations in Dehradun!",
    reviewSecondHalf: "",
  },
  {
    avatar: AVTR2,
    name: "Ankita Sachdeva",
    reviewFirstHalf:
      "It was perfect for me. I got the adorable decor as thought of and as discussed in single meeting. They are professional and creative in their work. Everyone loved the event and I am truly satisfied with their work. Kudos to the team ! 👍 Would definitely recommend them",
    reviewSecondHalf: "",
  },
  {
    avatar: AVTR2,
    name: "Priyanka Rauthan",
    reviewFirstHalf:
      "Yesterday was a special day in our life as it was our baby's first Birthday, which Isha made even more enjoyable and perfect. Specially to mention that She made the guests to have fun and entertained with her amazing anchoring skills. Thank you Isha for organising everything so beautifully..",
    reviewSecondHalf:
      " ** P.S - Don’t think twice and go ahead with Lahar Events. You won’t regret it",
  },
  {
    avatar: AVTR2,
    name: "Nikita Jain",
    reviewFirstHalf:
      "I don't know how & from where to begin with, you and your team have made our day more memorable by showing your creativity & hardwork in decorating the venue more beautifully then we wanted & expected.I could say, everyone present in the event were appreciating your work and wanted to know about you & the team. ",
    reviewSecondHalf:
      "Glad that our path crossed & I got an opportunity to experience your magical work. I really want to appreciate you & the team for converting my imagination to reality, you are one gem of a person. Thank you once again and keep giving the same experience to everyone.",
  },
  {
    avatar: AVTR2,
    name: "Disha Gupta",
    reviewFirstHalf:
      "I had a baby shower function at my home and these guys have make it a success with all the hard work they have put in for decoration stuff. I am glad that I have chosen them to the baby shower memorable for me.. I would highly recommend them if anyone want to use there services they are reliable, responsive and suggest options that have value of money..",
    reviewSecondHalf: "",
  },
  {
    avatar: AVTR1,
    name: "Manoj Saklani",
    reviewFirstHalf:
      "Celebrations are very important part in our life, specially when it comes to marriages where you need to organise, plan and then execute well,  and “Lahar Events” are best in doing this.  I had my sister’s marriage in this November and was unable to help my parents as I live in Sydney.",
    reviewSecondHalf:
      " It was tough for me to organise the event. So I just googled up and came across Lahar events. I called them up and discussed about organising the event and they were ready. I highly recommend “Lahar Events” to everyone out there to experience their wonderful service.",
  },
  {
    avatar: AVTR2,
    name: "Nilisha Thomas",
    reviewFirstHalf:
      "A big thank you to Lahar events for making my dream decoration come true for my sons first birthday.Isha and Sajan are the best people you can find in Dehradun for any events.As it was my sons first birthday ,i had a very detailed and precise requirements for each and every little thing.The theme which was on my mind had to be executed perfectly.",
    reviewSecondHalf:
      ", the theme of my sons birthday.Patience is one key factor when organising an event.Thank you Isha and Sajan for creating a memorable atmosphere that we are going to cherish all our life.",
  },
  {
    avatar: AVTR2,
    name: "Surbhi Agarwal",
    reviewFirstHalf:
      "I had a suprise planned for my Friend. It was completely according to my requirements and in my budget. She gave her best attempts to make it very beautiful❤ Though I was not present at the location yet she managed it by herself making it Adorable. Thank you and All the best!",
    reviewSecondHalf: "",
  },
];
// Review data array of the users ends here

function Testimonial() {
  AOS.init({
    duration: 1000,
  });
  return (
    <section className="Testimonial">
      <div
        className="heading__testimonial"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      </div>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        data-aos="fade-left"
        data-aos-delay="300"
        data-swiper-autoplay="2000"
      >
        {review.map(({ avatar, name, reviewFirstHalf, reviewSecondHalf }) => {
          return (
            <SwiperSlide
              data-swiper-autoplay="2000"
              className="testimonial"
              key={uuidv4()}
            >
              <div className="client__avatar">
                <img src={avatar} alt="Reviewer image" />
              </div>
              <h2 className="client__name">{name}</h2>
              <small className="client__review">
                {reviewFirstHalf}
                <p className="hide_testi">{reviewSecondHalf}</p>
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
