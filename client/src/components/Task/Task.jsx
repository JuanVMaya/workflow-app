import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Task.scss";
const Task = ({ name, description }) => {
  return (
    <section className="task">
      <h3 className="task__title">{name}</h3>
      <p>{description}</p>
      <div className="task__button-container">
        <button className="task__button task__button--previous">
          <AiOutlineArrowLeft />
        </button>
        <button className="task__button task__button--next">
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Task;
