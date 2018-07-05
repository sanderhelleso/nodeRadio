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
                <h5>{this.props.info}</h5>
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
}

function yt() {
    const url = document.querySelector("#seeYt").value;
    const ytWindow = window.open(url, '_blank');
    ytWindow.focus();
}

export default connect(mapStateToProps, actions)(Player);