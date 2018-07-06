import React, { Component } from 'react';
import Player from '../components/Player';

class Radio extends Component {
    componentDidMount() {
        document.body.style.overflow = "hidden";
        document.querySelector("#bg").classList.add("radioBG");
        setInterval(() => {
            const rgb = Math.floor(Math.random() * 255) + 50;
            const opacity = (Math.random() * 0.55) + 0.40;
            document.querySelector("#bg").style.backgroundImage = `linear-gradient(rgba(${rgb}, 0, 255, 0.8), rgba(0, 255, ${rgb}, ${opacity})), url('/img/background/radio${Math.floor(Math.random() * 10) + 1}.jpg')`;
        }, 10000);
    } 

    renderContent() {
        return <h1>{this.props.location.pathname.split("/")[2].toUpperCase()}</h1>
    }

    render() {
        return (
        <div id="bg">
            <div className="container white-text radioCont">
                {this.renderContent()}
                <Player />
            </div>
        </div>
        )
    }
}

export default Radio;
