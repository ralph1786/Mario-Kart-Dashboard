import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fireBaseConfig from "./config/firebaseConfig";

const store = createStore(
  rootReducer,
  //compose serves as a store enhancer.
  //This allows store to connect to the firebase DB.
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reduxFirestore(fireBaseConfig),
    reactReduxFirebase(fireBaseConfig, {
      useFirestoreForProfile: true, //allows access to user profile inside firebase
      userProfile: "users", // it tells which profile to look for.
      attachAuthIsReady: true
    }) //attachAuthIsReady is used in order to use firebaseAuthIsReady.
  )
);

//This waits until firebase finishes authenticating the user,
//before rendering the application.
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
