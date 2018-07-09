import React, { Component } from 'react'

class Volume extends Component {
  render() {
    return (
        <div id="volumeCont" className="animated fadeIn">
            <div className="row">
                <div className="col s1 volIco">
                    <i className="material-icons volumeDown">volume_down</i>
                </div>
                <div id="volumeRow" className="col s10">
                    <input id="volume" type="range" min="0" max="100" />
                </div>
                <div className="col s1 volIco">
                    <i className="material-icons volumeUp">volume_up</i>
                </div>
            </div>
        </div>
    )
  }
}

export default Volume;
