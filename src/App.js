import React from "react";
import "./App.css";
import { Box, Columns } from "react-bulma-components";

const App = () => {
  return (
    <div>
      <Box>
        <Columns breakpoint="desktop">
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
        </Columns>
      </Box>
    </div>
  );
};

export default App;
