// import materializeCSS
import "materialize-css/dist/css/materialize.min.css";

// import React, React-DOM
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// import App component from the App.js file
import App from "./components/App";
import reducers from "./reducers";
import axios from "axios";

// starting up redux store reducer
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// render React App
ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.querySelector("#root")
);