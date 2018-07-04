import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import * as actions from "../actions";

class Videoplayer extends Component {
    componentDidMount() {
        return this.props.fetchSong("house"); // this SHOULD return a URL
    }

    render() {
        return (
            <ReactPlayer url={window.location.origin + this.props.src} playing />
        )
    }
}

const mapStateToProps = state => ({
    src: state.genre
});

export default connect(mapStateToProps, actions)(Videoplayer);