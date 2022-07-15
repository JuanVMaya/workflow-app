import { AiOutlinePlus } from "react-icons/ai";
import Project from "../Project/Project";
import Task from "../Task/Task";
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
            <button className="stage__button">
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
          <div className="stage__header-container">
            <h2 className="stage__title">Executing</h2>
            <button className="stage__button">
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
          <Task
            name="Task 4"
            description="This is the task description #2. Watch out becuase it can get very long"
          />
        </div>
        <div className="stage">
          <div className="stage__header-container">
            <h2 className="stage__title">Planning</h2>
            <button className="stage__button">
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
          <div className="stage__header-container">
            <h2 className="stage__title">Completed</h2>
            <button className="stage__button">
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
        </div>
      </article>
    </main>
  );
};

export default MainDashboard;
