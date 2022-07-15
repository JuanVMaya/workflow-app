import workflowLogo from "../../assets/workflow-logo.png";
import "./PageHeader.scss";

const PageHeader = () => {
  return (
    <header className="header">
      <a className="header__logo-container" href="">
        <h2 className="header__title">WorkFlow</h2>
        <img className="header__logo" src={workflowLogo} alt="Workflow logo" />
      </a>
      <h2>Your awesome project management tool!</h2>
    </header>
  );
};

export default PageHeader;
