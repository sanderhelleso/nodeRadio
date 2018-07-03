// import materializeCSS
import "materialize-css/dist/css/materialize.min.css";

// import React, React-DOM
import React from "react";
import ReactDOM from "react-dom"

// import App component from the App.js file
import App from "./components/App";
import axios from "axios";

// render React App
ReactDOM.render(
    <App />, document.querySelector("#root")
);