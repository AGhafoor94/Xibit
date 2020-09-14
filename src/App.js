import React from "react";
import "./App.css";
import { Columns } from "react-bulma-components";

const App = () => {
  return (
    <div>
      <Columns breakpoint="desktop" style={{ height: "100vh" }}>
        <Columns.Column style={{ backgroundColor: "orange" }}>
          <p className="bd-notification is-success">First Column</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Second Column</p>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default App;
