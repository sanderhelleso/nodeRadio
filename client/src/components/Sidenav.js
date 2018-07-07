import React, { Component } from 'react';
import categories from "../vars/categories";

class Sidebar extends Component {
    // init sidenav
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
        });
    }

    // render sidenav cards
    renderContent() {
        return categories.map((category) =>
            <a key={category} href={`/radio/${category}`}>
                <li className="user-view">
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
                </li>
            </a>
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
