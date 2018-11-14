import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/"); //this will redirect user to '/' when form is submitted.
  };

  onChangeHandler = e => {
    this.setState({
      //Since both inputs will use the same function we can distinguish them by using [e.target.id]
      //that's the reason they have an id. This will equal email: e.target.value & password: e.target.value
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmitHandler}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChangeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
