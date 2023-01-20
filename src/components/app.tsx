import { CardList } from "./card-list/card-list";
import "./app.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="component-app">
      <CardList />
    </div>
  );
};

export { App };
