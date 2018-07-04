import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import * as actions from "../actions";

class Videoplayer extends Component {
    componentDidMount() {
        // get current url
        const category = this.props.location.pathname.split("/")[2];

        // fetch the current song playing
        return this.props.fetchSong(category);
    }

    render() {
        return (
            <ReactPlayer playing url={window.location.origin + this.props.src} controls={true} />
        )
    }
}

const mapStateToProps = state => ({
    src: state.genre
});

export default connect(mapStateToProps, actions)(Videoplayer);