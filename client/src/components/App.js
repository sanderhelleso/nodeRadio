// animate.css
import "animate.css";
import "materialize-css/dist/js/materialize.min.js";

// import React & React router
import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

// components
import Landing from "../components/Landing";
import GenreCard from "../components/GenreCard";
import Radio from "../components/Radio";
import Sidenav from "../components/Sidenav";

// create App component
class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component ={Landing} />
                        <Route exact path="/" component ={GenreCard} />
                        <Route path="/radio/" component ={Radio} />
                        <Route path="/radio/" component ={Sidenav} />
                        <div id ="bg"></div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

// export App component
export default App;