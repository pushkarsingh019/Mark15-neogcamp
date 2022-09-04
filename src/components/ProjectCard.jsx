function ProjectCard({
  name,
  codeName,
  description,
  liveProjectLink,
  githubLink
}) {
  return (
    <div className="project-card">
      <h4>{name}</h4>
      <small>{codeName}</small>
      <p>{description}</p>
      <br />
      <div className="cta-section">
        <a
          target="_blank"
          rel="noreferrer"
          href={liveProjectLink}
          className="primary button"
        >
          Live Project
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={githubLink}
          className="secondary button"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
