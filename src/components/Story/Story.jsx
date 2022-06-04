import "./Story.css";
import story_image from "../../images/about_us_serve.jpg";
function Story() {
  return (
    <div className="Story">
      <div className="Story-Container">
        <div className="left-story">
          <img src={story_image} alt="" />
        </div>
        <div className="right-story">
        <h2>Our Story</h2>
          <p>
            We are Dehradun based event planning company.. "At Lahar Events we offer good quality services that go a long way to ensuring that your requirments are well met. We have experienced and trained professionals who have the relevant technical knowledge on the subject matter. Our customer service goes above and beyond - and our reviews show that you can trust us. Feel free to get in touch anytime to discuss further."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
