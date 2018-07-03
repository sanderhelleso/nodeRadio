// import React & React router
import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

// components
import Videoplayer from "../components/Videoplayer";

// create App component
class App extends Component {
    componentDidMount() {
        console.log(123);
    }

    render() {
        return (
            <div>
                <h1>HELLO</h1>
                <Videoplayer />
            </div>
        );
    }
}

// export App component
export default App;