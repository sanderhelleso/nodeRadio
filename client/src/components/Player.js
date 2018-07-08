import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";
import ReactPlayer from 'react-player'
import Progressbar from "../components/Progressbar";

class Player extends Component {
    componentDidMount() {

        // get current url
        const category = window.location.href.split("/");
        const getSrc = category[category.length - 1];
        
        // fetch the current song playing
        return this.props.fetchSong(getSrc);
    }

    render() {
        return (
            <div>
                <span>Now playing</span>
                <h4 id="currentSongTitle">{this.props.info}</h4>
                <ReactPlayer onReady={playOnSpacePress} id="player" url={this.props.src} muted controls={true} />
                <div className="steamerCont">
                    <i id="streamer" onClick={stream} className="material-icons radioOptions noSelect">play_circle_outline</i>
                    <button id="seeYt" onClick={yt} className="btn" value={this.props.link}>See on YouTube</button>
                </div>
                <div className="barCont">
                    <h5 id="songInfo"><span id="songPlayedDuration">-</span><span id="songTotalDuration">-</span></h5>
                    <Progressbar />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    src: state.genre,
    info: state.info,
    link: state.link
});

// start / pause toogle
function stream() {
    const ele = document.querySelector("#streamer");
    const player = document.querySelector("#player").childNodes[0];
    const category = window.location.href.split("/");
    const getSrc = category[category.length - 1];

    console.log(player.src);
    console.log(player.duration);

    if (ele.innerHTML === "play_circle_outline") {
        player.play(); 
        ele.innerHTML = "pause_circle_outline";
        ele.classList.add("playing");
    }

    else {
        player.pause();
        ele.innerHTML = "play_circle_outline";
        ele.classList.remove("playing");
    }

    if (player.muted) {
        setSrc(player, player.duration, getSrc, 1);
    }

    player.muted = false;
    streamStats(player);
}

// display song stats
function streamStats(player) {
    document.querySelector("#songInfo").style.opacity = "1";

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
        setInterval(() => {
            songProgress(player.currentTime, player.duration);
        }, 500);
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

// allow user to start / pause on space press
function playOnSpacePress() {
    document.body.addEventListener("keypress", e => {
        if (e.keyCode == "32") {
            document.querySelector("#streamer").click();
        }
    });
}

// display current progress of a song
function songProgress(currentTime, totalTime) {
    const bar = document.querySelector("#currentProgress");
    const percent = currentTime * 100 / totalTime;
    bar.style.width = `${percent}%`;
}

// set continuously song src
function setSrc(player, time, category, id) {
    const timeInMs = (time * 1000) - 1000;
    postLiveData(category, id);

    // set crossfade
    console.log(timeInMs);
    setTimeout(() => {
        crossFade(player);
    }, timeInMs - 5000);

    console.log("set src started");
    setTimeout(() => {
        id++;
        player.src = `/genres/${category}/${category}${id}.mp4`;
        console.log("sat src");

        player.play();
        setTimeout(() => {
            setSrc(player, player.duration, category, id);
        }, 1000);
    }, timeInMs);
}

// fade out and in music
function crossFade(player) {
    setTimeout(() => {
        clearInterval(fadeOutVolume);
        const fadeInVolume = setInterval(() => {
            player.volume = player.volume + 0.1;
        }, 500);

        setTimeout(() => {
            clearInterval(fadeInVolume);
        }, 4500);
    }, 5000);

    const fadeOutVolume = setInterval(() => {
        player.volume = player.volume - 0.1;
    }, 500);
}

// send live data about radio to server
function postLiveData(category, id) {
    fetch(`/api/live/${category}`, {
    method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            songId: id
        })
    })
    .then(res => res.json())
    .then(res => console.log(res));
}

export default connect(mapStateToProps, actions)(Player);