import Button from "../components/Button";

function BlogCard({ name, month, description, link, websiteLink }) {
  return (
    <div className="blog-card">
      <h4>{name}</h4>
      <small>{month}</small>
      <p>{description}</p>
      <div className="cta-section">
        <Button text="Read More" variant="primary button" redirect={link} />
        <a
          target="_blank"
          rel="noreferrer"
          href={websiteLink}
          className="secondary button"
        >
          Read On Website
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
