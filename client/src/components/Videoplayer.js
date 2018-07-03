import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

class Videoplayer extends Component {
    componentDidMount() {
        return this.props.fetchSong("house"); // this SHOULD return a URL
    }

    render() {
        return (
            <video className="responsive-video" controls autoPlay>
                <source src={this.props.src} type="video/mp4"></source>
            </video>
        )
    }
}

const mapStateToProps = state => ({
    src: state.genre
});

export default connect(mapStateToProps, actions)(Videoplayer);