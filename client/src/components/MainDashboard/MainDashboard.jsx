import Project from "../Project/Project";
import Task from "../Task/Task";
import AddItemForm from "../AddItemForm/AddItemForm";
import { AiOutlinePlus } from "react-icons/ai";
import { Component } from "react";
import axios from "axios";
import "./MainDashboard.scss";

class MainDashboard extends Component {
  state = {
    isModalOpen: false,
    itemType: "",
    projectData: [],
    selectedProjectId: null,
    selectedProject: null,
  };

  handleAddProject = () => {
    this.setState({
      itemType: "project",
      isModalOpen: true,
    });
  };
  handleAddTask = () => {
    this.setState({
      itemType: "task",
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleProjectClick = (id) => {
    this.setState({
      selectedProjectId: id,
    });
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:8080/projects")
      .then((response) => {
        this.setState({
          projectData: response.data,
        });
      })
      .catch((error) => {
        console.log("There was an error fetching projects: ", error);
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.selectedProjectId !== this.state.selectedProjectId) {
      axios
        .get(`http://localhost:8080/projects/${this.state.selectedProjectId}`)
        .then((response) => {
          console.log(response.data);
          this.setState({
            selectedProject: response.data,
          });
        })
        .catch((error) => {
          console.log("There was an error getting the tasks", error);
        });
    }
  };

  render() {
    return (
      <>
        {this.state.isModalOpen ? (
          <AddItemForm
            isOpen={this.state.isModalOpen}
            closeModal={this.handleCloseModal}
            itemType={this.state.itemType}
          />
        ) : (
          <main className="dashboard">
            <article className="dashboard__projects">
              <h1 className="dashboard__title">Projects</h1>
              <button className="button" onClick={this.handleAddProject}>
                <AiOutlinePlus />
                <span className="button__text">Add project</span>
              </button>
              {this.state.projectData.map((project) => {
                return (
                  <Project
                    key={project.id}
                    name={project.name}
                    id={project.id}
                    selected={this.state.selectedProjectId}
                    onProjectClick={this.handleProjectClick}
                  />
                );
              })}
            </article>
            <article className="dashboard__tasks">
              <div className="stage">
                <div className="stage__header-container">
                  <h2 className="stage__title">Unassigned</h2>
                  <button
                    className="stage__button"
                    onClick={this.handleAddTask}
                  >
                    <AiOutlinePlus size="1.5rem" />
                  </button>
                </div>
                {this.state.selectedProject &&
                  this.state.selectedProject.tasks
                    .filter((task) => {
                      return task.stage === "Unassigned";
                    })
                    .map((task) => {
                      return (
                        <Task
                          key={task.id}
                          name={task.name}
                          description={task.description}
                          taskId={task.id}
                          projectId={this.state.selectedProject.id}
                        />
                      );
                    })}
              </div>
              <div className="stage">
                <h2 className="stage__title">Executing</h2>
                {this.state.selectedProject &&
                  this.state.selectedProject.tasks
                    .filter((task) => {
                      return task.stage === "Executing";
                    })
                    .map((task) => {
                      return (
                        <Task
                          key={task.id}
                          name={task.name}
                          description={task.description}
                          taskId={task.id}
                          projectId={this.state.selectedProject.id}
                        />
                      );
                    })}
              </div>
              <div className="stage">
                <h2 className="stage__title">Planning</h2>
                {this.state.selectedProject &&
                  this.state.selectedProject.tasks
                    .filter((task) => {
                      return task.stage === "Planning";
                    })
                    .map((task) => {
                      return (
                        <Task
                          key={task.id}
                          name={task.name}
                          description={task.description}
                          taskId={task.id}
                          projectId={this.state.selectedProject.id}
                        />
                      );
                    })}
              </div>
              <div className="stage">
                <h2 className="stage__title">Completed</h2>
                {this.state.selectedProject &&
                  this.state.selectedProject.tasks
                    .filter((task) => {
                      return task.stage === "Completed";
                    })
                    .map((task) => {
                      return (
                        <Task
                          key={task.id}
                          name={task.name}
                          description={task.description}
                          taskId={task.id}
                          projectId={this.state.selectedProject.id}
                        />
                      );
                    })}
              </div>
            </article>
          </main>
        )}
      </>
    );
  }
}

export default MainDashboard;
