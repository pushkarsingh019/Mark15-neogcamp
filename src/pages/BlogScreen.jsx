import Navbar from "../components/Navbar";
import blogSchema from "../data/blog";
import BlogCard from "../components/BlogCard";

function BlogHeroSection() {
  return (
    <section className="text-section padding100">
      <h1>Blog</h1>
      <hr />
    </section>
  );
}

function DisplayBlog() {
  return (
    <section className="display-blog padding100">
      {blogSchema.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            name={blog.name}
            month={blog.month}
            description={blog.description}
            websiteLink={blog.websiteLink}
            link={blog.link}
          />
        );
      })}
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
      <DisplayBlog />
    </main>
  );
}

export default BlogScreen;
