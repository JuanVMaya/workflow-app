import { AiOutlinePlus } from "react-icons/ai";
import "./MainDashboard.scss";
const MainDashboard = (props) => {
  return (
    <main className="dashboard">
      <article className="dashboard__projects">
        <h1 className="dashboard__title">Projects</h1>
        <button className="button">
          <AiOutlinePlus />
          <span className="button__text">Add project</span>
        </button>
        <section className="project">
          <h2 className="project__title">Project Name 1</h2>
          <p className="project__date">Start: 2022-06-10</p>
          <p className="project__date">Due: 2022-06-10</p>
        </section>
      </article>
      <article className="dashboard__tasks"></article>
    </main>
  );
};

export default MainDashboard;
