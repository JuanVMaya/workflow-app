import {
  AiOutlinePlus,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Project from "../Project/Project";
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

        <Project
          name="Project Name 1"
          timestamp="2022 - 06 - 10"
          deadline="2022 - 06 - 10"
          selected={false}
        />
        <Project
          name="Project Name 2"
          timestamp="2022 - 06 - 10"
          deadline="2022 - 06 - 10"
          selected={true}
        />
      </article>
      <article className="dashboard__tasks">
        <div className="stage">
          <div className="stage__header-container">
            <h2 className="stage__title">Not started</h2>
            <button className="stage__button">
              <AiOutlinePlus size="1.5rem" />
            </button>
          </div>
          <section className="task">
            <h3 className="task__title">Task 1</h3>
            <p>Description</p>
            <div className="task__button-container">
              <button className="task__button task__button--previous">
                <AiOutlineArrowLeft />
              </button>
              <button className="task__button task__button--next">
                <AiOutlineArrowRight />
              </button>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default MainDashboard;
