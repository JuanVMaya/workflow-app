import axios from "axios";
import ReactModal from "react-modal";
import "./AddItemForm.scss";

const AddItemForm = ({ isOpen, closeModal, itemType }) => {
  const handleCloseForm = () => {
    closeModal();
  };
  const handleSubmitProject = (event) => {
    event.preventDefault();
    const toTimestamp = (strDate) => {
      const dt = new Date(strDate).getTime();
      return dt / 1000;
    };
    let date = toTimestamp(event.target.date.value);

    axios
      .post("http://localhost:8080/projects", {
        name: event.target.date.name,
        deadline: date,
      })
      .then((response) => {
        closeModal();
      })
      .catch((error) => {
        console.log("There was an error creating the project", error);
      });
  };
  const handleSubmitTask = (event) => {
    event.preventDefault();
    //Make post request to server to add task
    closeModal();
  };

  return (
    <ReactModal className="modal" overlayClassName="overlay" isOpen={isOpen}>
      {itemType === "project" ? (
        <form onSubmit={handleSubmitProject} className="form">
          <h2 className="form__title">Add Project</h2>
          <label className="form__label">
            Project name:
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter project name"
            />
          </label>
          <label className="form__label">
            Due date:
            <input className="form__input" type="date" name="date" id="date" />
          </label>
          <div className="task__button-container">
            <button
              type="button"
              className="button button--cancel"
              onClick={handleCloseForm}
            >
              Close
            </button>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmitTask} className="form">
          <h2 className="form__title">Add Task</h2>
          <label className="form__label">
            Task name:
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter task name"
            />
          </label>
          <label className="form__label">
            Description:
            <textarea
              className="form__input form__input--textarea"
              placeholder="Enter task description"
              name="description"
              id="description"
            />
          </label>
          <div className="task__button-container">
            <button
              type="button"
              className="button button--cancel"
              onClick={handleCloseForm}
            >
              Close
            </button>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      )}
    </ReactModal>
  );
};
export default AddItemForm;
