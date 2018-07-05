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
                <ReactPlayer id="player" onReady={stream} url={window.location.origin + this.props.src} controls={true} />
                <h4>{this.props.info}</h4>
                <h5><span id="songPlayedDuration"></span> / <span id="songTotalDuration"></span></h5>
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

    streamStats(player);
}

function streamStats(player) {
    document.querySelector("#songTotalDuration").innerHTML = convertSecs(player.duration);    
}

function convertSecs(time) {
    const min = Math.floor(time / 60);
    const sec = time - min * 60;
    return min + ":" + sec.toFixed(0);
}

function yt() {
    const url = document.querySelector("#seeYt").value;
    const ytWindow = window.open(url, '_blank');
    ytWindow.focus();
}

export default connect(mapStateToProps, actions)(Player);