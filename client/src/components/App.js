// import React & React router
import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

// create App component
class App extends Component {
    componentDidMount() {
        console.log(123);
    }

    render() {
        return (
            <div>
                <h1>HELLO</h1>
            </div>
        );
    }
}

// export App component
export default App;