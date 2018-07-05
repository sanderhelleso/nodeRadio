import React, { Component } from 'react';
import Player from '../components/Player';

class Radio extends Component {
    componentWillMount() {
        document.body.classList.add("radioBG");
    } 

    renderContent() {
        return <h1>{this.props.location.pathname.split("/")[2].toUpperCase()}</h1>
    }

    render() {
        return (
        <div className="container white-text">
            <div>
                {this.renderContent()}
            </div>
            <Player />
        </div>
        )
    }
}

export default Radio;
