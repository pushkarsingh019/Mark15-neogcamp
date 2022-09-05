import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import blogSchema from "../data/blog";
import Footer from "../components/Footer";

export function Back() {
  const navigate = useNavigate();

  return (
    <div className="back">
      <button onClick={() => navigate("/blog")} className="back-button">
        ← Go Back
      </button>
    </div>
  );
}

function PostHero() {
  return (
    <section className="text-section padding100 blog-title">
      <h1>{blogSchema[1].name}</h1>
      <hr />
    </section>
  );
}

function PostContent() {
  return (
    <section className=" post-content padding100">
      <p>
        When the famous comedian <strong>Jerry Seinfeld</strong> was starting
        out his career, he would aim to perform at various comedy clubs. Amongst
        the many, The Manhattan Comedy was the most famous as here many rookies
        were turned into pros. So Jerry tried every chance he had to get shows.
        But, he just dint get any slots, making him believe the club is already
        booked by other eminent artists, but at times, he would notice that even
        though the club was vacant, still the owner of the comedy club dint give
        Jerry the slot, so he decided to ask the owner about it. And to his
        surprise, the owner said,{" "}
        <em>
          “Your artist isn’t out yet, you need to be crushed, and I am going to
          be the person who crushes you”
        </em>
        .
      </p>
      <br />
      <p>
        Any artist was an amateur mindset would be intimidated and dispirited.
        But Jerry was a professional. Instead of being discouraged, he was
        motivated. Instead of seeing the remark as destructive, he chose to see
        it as instructive.
      </p>
      <br />
      <p>
        <em>Because getting feedbacks is how we grow</em>.
      </p>
      <br />
      <p>
        The Amateur gets discouraged when someone does not appreciate their
        work. The Professional asks, “How can I improve?” Because a professional
        knows,
        <em>
          What you throw on top of a fire is a fuel for the fire, What stands in
          the way. becomes the way
        </em>
        .
      </p>
      <br />
      <p>
        So, the next time someone talks ill about your craft. Be a professional.
        Take their feedback, seriously, not personally. And if someone or
        something tries to stop you from doing what you love, thank god for
        their presence in your life.
      </p>
      <br />
      <p>
        Because for a professional, the obstacle is the way. The more problems
        you have, the stronger you become. If you do something important, nature
        is going to test you, Not to pull you down, but to make you stronger for
        what is to come.
      </p>
    </section>
  );
}

function CrushPost() {
  return (
    <main className="post-page">
      <Navbar />
      <Back />
      <PostHero />
      <PostContent />
      <Footer />
    </main>
  );
}

export default CrushPost;
