import React, { Component } from 'react';
import Player from '../components/Player';

class Radio extends Component {
    componentDidMount() {
        // remove scrollbar
        document.body.style.overflow = "hidden";

        // set bg with gradient
        const bg = document.querySelector("#bg");
        bg.classList.add("radioBG");
        setInterval(() => {
            // fade in & out
            bg.className = "radioBG animated fadeOut";
            setTimeout(() => {
                bg.className = "radioBG animated fadeIn";
                const rgb = Math.floor(Math.random() * 200) + 50;
                const opacity = (Math.random() * 0.55) + 0.40;
                const gradient = `linear-gradient(rgba(${rgb}, 0, 255, 0.8), rgba(0, 255, ${rgb}, ${opacity}))`
                document.body.style.background = gradient;
                document.querySelector("#bg").style.backgroundImage = `${gradient}, url('/img/background/radio${Math.floor(Math.random() * 10) + 1}.jpg')`;
            }, 500);
        }, 10000);
    } 

    renderContent() {
        return <h1>{this.props.location.pathname.split("/")[2].toUpperCase()}</h1>
    }

    render() {
        return (
            <div className="container white-text radioCont">
                <a href="#" data-target="slide-out" className="sidenav-trigger white-text"><i className="material-icons">menu</i></a>
                {this.renderContent()}
                <Player />
            </div>
        )
    }
}

export default Radio;
