import React, { Component } from 'react'

class Landing extends Component {
  componentDidMount() {
    // manipulate bg gradient depending on scroll pos
    window.addEventListener("scroll", () => {
      console.log(123);
    });
  }

  render() {
    return (
      <div id="intro" className="center-align white-text">
        <h1>radioNode</h1>
        <p>Enjoy the best of new and fresh music</p>
      </div>
    )
  }
}

export default Landing;
