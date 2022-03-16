import React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./style.scss";

const Index: React.FC = () => {
  return <App title="this is a title" />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
