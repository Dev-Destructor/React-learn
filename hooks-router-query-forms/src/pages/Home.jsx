import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/hooks">Hooks</NavLink>
          </li>
          <li>
            <NavLink to="/router">Router</NavLink>
          </li>
          <li>
            <NavLink to="/queries">Query</NavLink>
          </li>
          <li>
            <NavLink to="/forms">Hook Form</NavLink>
          </li>
          <li>
            <NavLink to="/styled">Styled Components</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
