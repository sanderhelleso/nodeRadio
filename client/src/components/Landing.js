import React, { Component } from 'react'

class Landing extends Component {
  componentDidMount() {
    // manipulate bg gradient depending on scroll pos
    window.addEventListener("scroll", () => {
      const pos = document.documentElement.scrollTop / 4;
      const gradient = `linear-gradient(rgba(${((pos + 200) * 1.0075) / 1.6}, 0, 255, 0.8), rgba(0, ${((pos + 220) * 1.0075) / 1.3}, 242, 0.95))`;
      console.log(pos);
      document.body.style.backgroundImage = `${gradient}, url('/img/landing.jpg')`;
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
