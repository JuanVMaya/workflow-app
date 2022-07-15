import "./Project.scss";

const Project = ({
  name,
  timestamp,
  deadline,
  selected,
  id,
  onProjectClick,
}) => {
  const handleProjectClick = () => {
    onProjectClick(id);
  };
  return (
    <section
      className={`project ${id === selected ? "project--selected" : ""}`}
      onClick={handleProjectClick}
    >
      <h2 className="project__title">{name}</h2>
      {/* <p className="project__date">Start: {timestamp}</p>
      <p className="project__date">Due: {deadline}</p> */}
    </section>
  );
};

export default Project;
