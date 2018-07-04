import React, { Component } from 'react';

class GenreCard extends Component {
    renderContent() {
        const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metal", "country", "R&B", "indie"];
        return categories.map((category) =>
            <a href={`/radio/${category}`}>
                <div key={category} className="col s12 m6 l4">
                    <div className="z-depth-3 card">
                        <div className="card-image">
                            <div className="genreOverlay">
                                <img className="genreCover" src={`img/${category}.jpg`}/>
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