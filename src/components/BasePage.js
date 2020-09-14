import React from "react";
import { Columns } from "react-bulma-components";

const BasePage = () => {
  return (
    <div>
      <Columns breakpoint="desktop" style={{ height: "100vh" }}>
        <Columns.Column style={{ backgroundColor: "orange" }}>
          <p className="bd-notification is-success">Facts component</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Component</p>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default BasePage;
