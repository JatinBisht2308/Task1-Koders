import "./Story.css";
import story_image from "../../images/Events/Theme.jpg";
function Story() {
  return (
    <div className="Story">
      <div className="row my-5 align-items-center main_story col-10 col-sm-11 offset-sm-0 offset-1">
        <div className="col-sm-4 col-12 story_left justify-content-center mx-auto">
          <img src={story_image} classname="img-responsive my-auto" alt="" />
        </div>

        <div className="mt-3 col-12 col-sm-6 story_right justify-content-center align-middle">
          <h2 className="text-sm-start mb-3">Our Story</h2>
          <p className="text-sm-start text-center">
            We are Dehradun based event planning company.."At Lahar Events we
            offer good quality services that go a long way to ensuring that your
            requirments are well met", We have experienced and trained
            professionals. Our customer service goes above and beyond, - and our
            reviews show that you can trust us. Feel free to get in touch
            anytime to discuss further.We provide A to Z services related any
            event you are organising to..
          
          <span className="hidden_p text-sm-start text-center">
            "As per customers requirements we serve the best in clients
            budget.. we are not here to earn only, we are here to make someone's
            dream event come true.We provide A to Z services related any event
            you are organising to. As per customers requirements we serve the
            best in clients budget.. we are not here to earn only, we are here
            to make someone's dream event come true".
          </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
