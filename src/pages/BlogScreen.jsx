import Navbar from "../components/Navbar";

function BlogHeroSection() {
  return (
    <section className="text-section padding100">
      <h1>Blog</h1>
      <hr />
    </section>
  );
}

function Disclamer() {
  return (
    <section className="disclamer padding100">
      <code>This page is currently under development</code>
      <br />
      <strong>
        Visit my main blog here :{" "}
        <i>
          <a href="https://stoicpushkar.com">stoicpushkar.com</a>
        </i>
      </strong>
    </section>
  );
}

function BlogScreen() {
  return (
    <main>
      <Navbar />
      <BlogHeroSection />
      <Disclamer />
    </main>
  );
}

export default BlogScreen;
