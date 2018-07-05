import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import * as actions from "../actions";

class Player extends Component {
    componentDidMount() {

        // get current url
        const category = window.location.href.split("/");
        
        // fetch the current song playing
        return this.props.fetchSong(category[category.length - 1]);
    }

    render() {
        return (
            <div>
                <ReactPlayer id="player" url={window.location.origin + this.props.src} muted controls={true} />
                <h4>{this.props.info}</h4>
                <h5><span id="songPlayedDuration"></span><span id="durationSlash"></span><span id="songTotalDuration"></span></h5>
                <i id="streamer" onClick={stream} className="material-icons radioOptions noSelect">play_arrow</i>
                <button id="seeYt" onClick={yt} className="btn" value={this.props.link}>See on YouTube</button>
            </div>
        )
    }
}

const mapStateToProps = state =>  ({
    src: state.genre,
    info: state.info,
    link: state.link
});

// start / pause toogle
function stream() {
    const ele = document.querySelector("#streamer");
    const player = document.querySelector("#player").childNodes[0];

    if (ele.innerHTML === "play_arrow") {
        player.play(); 
        ele.innerHTML = "pause";
    }

    else {
        player.pause();
        ele.innerHTML = "play_arrow";
    }

    player.muted = false;
    streamStats(player);
}

// display song stats
function streamStats(player) {
    // set current / total dur slash
    const slash = document.querySelector("#durationSlash");
    slash.innerHTML = " / ";

    // set total duration
    const setTotalDuration = document.querySelector("#songTotalDuration"); 
    setTotalDuration.innerHTML = convertSecs(player.duration);

    // start and display current duration interval
    getPlayedDuration(player);

}

// displays current time of song playing
let intervalStarted = false;
function getPlayedDuration(player) {
    if (!intervalStarted) {
        intervalStarted = true;
        const setTime = document.querySelector("#songPlayedDuration");
        setTime.innerHTML = convertSecs(player.currentTime);
        setInterval(() => {
            setTime.innerHTML = convertSecs(player.currentTime);
        }, 1000);
    }
}

// convert to min and secs
function convertSecs(time) {
    const min = Math.floor(time / 60);
    const sec = time - min * 60;
    if (sec.toFixed(0) < 10) {
        return min + ":0" + sec.toFixed(0);
    }

    else {
        return min + ":" + sec.toFixed(0);
    }
}

// open song url in new tab and focus it
function yt() {
    const url = document.querySelector("#seeYt").value;
    const ytWindow = window.open(url, '_blank');
    ytWindow.focus();
}

export default connect(mapStateToProps, actions)(Player);