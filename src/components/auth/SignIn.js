import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  onChangeHandler = e => {
    this.setState({
      //Since both inputs will use the same function we can distinguish them by using [e.target.id]
      //that's the reason they have an id. This will equal email: e.target.value & password: e.target.value
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmitHandler}>
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChangeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">SignIn</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
