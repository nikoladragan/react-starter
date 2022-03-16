import React from "react";
import Icon from "../Shared/Icon";
import "./App.styles.scss";

const App: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div data-testid="test">
      App - {title} <Icon name="bell" />
    </div>
  );
};

export default App;
