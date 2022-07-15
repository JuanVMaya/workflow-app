import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import "./Task.scss";
const Task = ({ name, description, projectId, taskId }) => {
  const handleNext = () => {
    // projects/:projectId/tasks/:taskId/stage
    axios
      .put(`http://localhost:8080/projects/${projectId}/tasks/${taskId}/stage`, {
        instruction: "next",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("There was an error updating the stage", error);
      });
  };
  const handlePrevious = () => {
    // projects/:projectId/tasks/:taskId/stage
    axios
      .put(`http://localhost:8080/projects/${projectId}/tasks/${taskId}/stage`, {
        instruction: "previous",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("There was an error updating the stage", error);
      });
  };

  return (
    <section className="task">
      <h3 className="task__title">{name}</h3>
      <p>{description}</p>
      <div className="task__button-container">
        <button
          className="task__button task__button--previous"
          onClick={handlePrevious}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="task__button task__button--next"
          onClick={handleNext}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Task;
