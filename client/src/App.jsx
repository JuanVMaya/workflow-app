import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <PageHeader />
        <MainDashboard />
      </>
    );
  }
}
export default App;
