import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

class Videoplayer extends Component {
    componentDidMount() {
        console.log(321);
    }

    render() {
        return (
            <video className="responsive-video" controls autoPlay>
                <source src="movie.mp4" type="video/mp4"></source>
            </video>
        )
    }
}

export default connect(null, actions)(Videoplayer);
