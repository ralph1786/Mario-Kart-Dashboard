import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">SignIn</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLink;
