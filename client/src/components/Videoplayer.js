import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

class Videoplayer extends Component {
    renderContent() {
        return this.props.fetchSong("house"); // this SHOULD return a URL
    }

    render() {
        return (
            <video className="responsive-video" controls autoPlay>
                <source src={this.renderContent()} type="video/mp4"></source>
            </video>
        )
    }
}

export default connect(null, actions)(Videoplayer);
