import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />;

  return (
    <nav className="nav-wrapper red darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          MarioKart
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
