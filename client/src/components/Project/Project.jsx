import "./Project.scss";

const Project = ({ name, timestamp, deadline }) => {
  return (
    <section className="project project--selected">
      <h2 className="project__title">{name}</h2>
      <p className="project__date">Start: {timestamp}</p>
      <p className="project__date">Due: {deadline}</p>
    </section>
  );
};

export default Project;
