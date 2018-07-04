// import React & React router
import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

// components
import Videoplayer from "../components/Videoplayer";
import GenreCard from "../components/GenreCard";

// create App component
class App extends Component {
    render() {
        return (
            <div>
                <h1>HELLO</h1>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component ={GenreCard} />
                        <Route path="/radio/" component ={Videoplayer} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

// export App component
export default App;