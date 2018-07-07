import React, { Component } from 'react'

class Progressbar extends Component {
  render() {
    return (
      <div id="progressBar" className="z-depth-3">
        <div id="currentProgress"></div>
      </div>
    )
  }
}

export default Progressbar;
