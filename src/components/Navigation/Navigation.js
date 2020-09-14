import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/welcome">welcome</Link>
          </li>
        </ul>
      </nav>
      ;
    </div>
  );
};

export default Navigation;
