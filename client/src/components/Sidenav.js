import React, { Component } from 'react';
import categories from "../vars/categories";

class Sidebar extends Component {

    // render sidenav cards
    renderContent() {
        return categories.map((category) =>
            <li key={category} className="user-view">
                <a key={category} href={`/radio/${category}`}>
                    <div className="background">
                        <div className="sideCard card">
                            <div className="card-image">
                                <div className="genreOverlay">
                                    <img className="genreCover" src={`/img/${category}.jpg`} alt={`${category}`} />
                                </div>
                                <span className="card-title genreTitle">{category.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }

    render() {
        return (
            <ul id="slide-out" className="sidenav">
                {this.renderContent()};
                <li className="sideHomeLink"><a href="/" className="white-text center-align">Back to homepage</a></li>
            </ul>
        )
    }
}

export default Sidebar
