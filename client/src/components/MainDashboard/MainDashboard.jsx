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
    selectedProject: {},
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

  componentDidMount = () => {
    axios.get("http://localhost:8080/projects").then((response) => {
      console.log(response.data);
      this.setState({
        projectData: response.data,
      });
    });
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
                    selected={this.state.selectedProject.id === project.id}
                    onClick={() => {
                      this.setState({
                        selectedProject: project,
                      });
                    }}
                  />
                );
              })}
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
              <Project
                name="Project Name 3"
                timestamp="2022 - 06 - 10"
                deadline="2022 - 06 - 10"
                selected={false}
              />
            </article>
            <article className="dashboard__tasks">
              <div className="stage">
                <div className="stage__header-container">
                  <h2 className="stage__title">Not started</h2>
                  <button
                    className="stage__button"
                    onClick={this.handleAddTask}
                  >
                    <AiOutlinePlus size="1.5rem" />
                  </button>
                </div>
                <Task
                  name="Task 1"
                  description="This is the task description. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 2"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 3"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
              </div>
              <div className="stage">
                <h2 className="stage__title">Executing</h2>
                <Task
                  name="Task 1"
                  description="This is the task description. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 2"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 3"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 4"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
              </div>
              <div className="stage">
                <h2 className="stage__title">Planning</h2>
                <Task
                  name="Task 1"
                  description="This is the task description. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 2"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 3"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
              </div>
              <div className="stage">
                <h2 className="stage__title">Completed</h2>

                <Task
                  name="Task 1"
                  description="This is the task description. Watch out becuase it can get very long"
                />
                <Task
                  name="Task 2"
                  description="This is the task description #2. Watch out becuase it can get very long"
                />
              </div>
            </article>
          </main>
        )}
      </>
    );
  }
}

export default MainDashboard;
