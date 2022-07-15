import ReactModal from "react-modal";
import "./AddItemForm.scss";

const AddItemForm = ({ isOpen, closeModal, itemType }) => {
  const handleCloseForm = () => {
    closeModal();
  };
  const handleSubmitProject = (event) => {
    event.preventDefault();
    //Make post request to server to add project
    closeModal();
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
            <button
              type="submit"
              className="button"
              onClick={handleSubmitProject}
            >
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
            <button type="submit" className="button" onClick={handleSubmitTask}>
              Submit
            </button>
          </div>
        </form>
      )}
    </ReactModal>
  );
};
export default AddItemForm;
