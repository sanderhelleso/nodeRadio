import React, { Component } from 'react';
import Player from '../components/Player';

class Radio extends Component {
    componentWillMount() {
        //document.body.classList.add("radioBG");
        setInterval(() => {
            //document.body.classList.remove("radioBG");
            const rgb = Math.floor(Math.random() * 255) + 50;
            const opacity = (Math.random() * 0.55) + 0.40;
            console.log(opacity);
            document.body.style.backgroundImage = `linear-gradient(rgba(${rgb}, 0, 255, 0.8), rgba(0, 255, ${rgb}, ${opacity})), url('/img/background/radio${Math.floor(Math.random() * 10) + 1}.jpg')`;
        }, 10000);
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
