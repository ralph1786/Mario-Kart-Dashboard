const initState = {
  // projects: [
  //   { id: "1", title: "Do not use the red shells", content: "It's a mistake." },
  //   { id: "2", title: "Use blue shells", content: "They are the best." },
  //   {
  //     id: "3",
  //     title: "Wait to use the star",
  //     content: "This is the most powerful item."
  //   }
  // ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
