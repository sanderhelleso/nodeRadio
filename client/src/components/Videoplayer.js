import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import * as actions from "../actions";

class Videoplayer extends Component {
    componentDidMount() {
        // get current url
        const category = window.location.href.split("/");
        
        // fetch the current song playing
        return this.props.fetchSong(category[category.length - 1]);
    }

    render() {
        return (
            <ReactPlayer id="videoplayer" playing url={window.location.origin + this.props.src} controls={true} />
        )
    }
}

const mapStateToProps = state => ({
    src: state.genre
});

export default connect(mapStateToProps, actions)(Videoplayer);