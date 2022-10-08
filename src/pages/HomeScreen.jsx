import NavBar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
// import profilePic from "../assets/profilePic.jpg";
import ExploreCard from "../components/ExploreCard";
import projectsLogo from "../assets/projectsLogo.jpg";
import blog from "../assets/blog.png";
import youtubeLogo from "../assets/youtube.png";

// importing animation library
import FadeIn from "react-fade-in";

function HeroSection() {
  return (
    <section className="hero-section padding100">
      <div className="text-section">
        <h1>Hi, I am Pushkar Singh</h1>
        <h3>Aspring full stack developer</h3>
        <br />
        <p>
          Welcome to my online home. This site is about my web development
          projects and some of the blogs that I have written on stoicism and
          self development. You can also find me on Youtube and my website on{" "}
          <a href="https://stoicpushkar.com">StoicPushkar.com</a>
        </p>
        <br />
        <div className="hero-cta">
          <Button
            variant={`primary button`}
            text={`Explore Projects`}
            redirect={`/projects`}
          />
          <Button
            variant={`secondary button`}
            text={`Read Blogs`}
            redirect={`/blog`}
          />
        </div>
      </div>
      {/* <div className="image-section">
        <img
          className="profile-image"
          src={profilePic}
          alt="Pushkar Singh Profile"
        />
      </div> */}
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section padding100">
      <h2>Technologies I know</h2>
      <br />
      <p>
        Html, CSS, Javascript, ReactJs, NextJs, Nodejs, MongoDb, Mongoose,
        Express, Ejs, Python.
      </p>
    </section>
  );
}

function ExploreSection() {
  return (
    <section className="explore-section padding100">
      <h2>Explore</h2>
      <p>
        I like to put my work online for the world to critisize and appreciate.
        You can see my projects, blogs and my YouTube channel
      </p>
      <br />
      <br />
      <div className="explore-grid">
        <ExploreCard
          image={projectsLogo}
          text="Projects"
          redirect="/projects"
        />
        <ExploreCard image={blog} text="Blogs" redirect="/blog" />
        <div
          onClick={() =>
            (window.location.href = "https://youtube.com/stoicpushkar")
          }
          className="explore-card"
        >
          <img src={youtubeLogo} alt={`Stoic Pushkar YouTube Channel`} />
          <br />
          <h3>YouTube</h3>
        </div>
      </div>
    </section>
  );
}

function HomeScreen() {
  return (
    <FadeIn>
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ExploreSection />
      <Footer />
    </FadeIn>
  );
}

export default HomeScreen;
