import "materialize-css/dist/js/materialize.min.js";

import React, { Component } from 'react';
import Player from '../components/Player';
import Volume from "../components/Volume";

class Radio extends Component {
    componentDidMount() {
        // remove scrollbar
        document.body.style.overflow = "hidden";

        initSidenav();

        // set bg with gradient
        const bg = document.querySelector("#bg");
        bg.classList.add("radioBG");
        setInterval(() => {
            // fade in & out
            bg.className = "radioBG animated fadeOut";
            setTimeout(() => {
                bg.className = "radioBG animated fadeIn";
                document.querySelector("#bg").style.backgroundImage = `${setBg()[0]}, url('/img/background/radio${setBg()[1]}.jpg')`;
            }, 500);
        }, 10000);
    } 

    renderContent() {
        return <h1>{this.props.location.pathname.split("/")[2].toUpperCase()}</h1>
    }

    render() {
        return (
            <div>
                <Volume />
                <a id="sidenavTrigger" onClick={sidenav} data-target="slide-out" className="sidenav-trigger white-text noSelect animated"><i className="material-icons">menu</i></a>
                <div className="container white-text radioCont animated fadeIn">
                    {this.renderContent()}
                    <Player />
                </div>
            </div>
        )
    }
}

function initSidenav() {
    document.addEventListener('DOMContentLoaded', () => {
        const elems = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(elems);
    });
}

// modify sidebar icons
function sidenav() {
    const trigger = document.querySelector("#sidenavTrigger").childNodes[0];
    const elems = document.querySelector('.sidenav');

    // show volume player
    document.querySelector("#volumeCont").style.display = "block";

    // animation
    iconAnimation(trigger);

    // change icon
    if (trigger.innerHTML === "menu") {
        trigger.innerHTML = "close";
    }

    else {
        trigger.innerHTML = "menu";
        M.Sidenav.getInstance(elems).close();
        document.querySelector("#volumeCont").style.display = "none";
    }

    // enable overlay to change icon aswell
    document.querySelector(".sidenav-overlay").addEventListener("click", () => {
        iconAnimation(trigger);
        trigger.innerHTML = "menu";
        document.querySelector("#volumeCont").style.display = "none";
    });
}

// animate icons
function iconAnimation(trigger) {
    // animation
    trigger.parentElement.classList.add("fadeIn");
    setTimeout(() => {
        trigger.parentElement.classList.remove("fadeIn");
    },500);
}

// set gradient background
function setBg() {
    const rgb = Math.floor(Math.random() * 200) + 50;
    const opacity = (Math.random() * 0.55) + 0.40;
    const gradient = `linear-gradient(rgba(${rgb}, 0, 255, 0.8), rgba(0, 255, ${rgb}, ${opacity}))`
    const source = Math.floor(Math.random() * 10) + 1;

    document.body.style.background = gradient;
    return [gradient, source];
}

export default Radio;
