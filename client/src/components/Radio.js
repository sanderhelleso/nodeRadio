import React, { Component } from 'react';
import Videoplayer from "../components/Videoplayer";

class Radio extends Component {
    renderContent() {
        return <h1>{this.props.location.pathname.split("/")[2].toUpperCase()}</h1>
    }

    render() {
        return (
        <div className="container">
            <div>
                {this.renderContent()}
            </div>
            <Videoplayer />
        </div>
        )
    }
}

export default Radio;
