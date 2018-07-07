import React, { Component } from 'react';
import categories from "../vars/categories";

class GenreCard extends Component {
    renderContent() {
        return categories.map((category) =>
            <a key={category} href={`/radio/${category}`}>
                <div className="col s12 m6 l4">
                    <div className="z-depth-3 card">
                        <div className="card-image">
                            <div className="genreOverlay">
                                <img className="genreCover" src={`img/${category}.jpg`} alt={`Click here to lisen to the music genre ${category}`} />
                            </div>
                            <span className="card-title genreTitle">{category.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </a>
        );
    }

    render() {
        return (
            <div className="container row genres">
                {this.renderContent()}
            </div>
        )
    }
}

export default GenreCard;