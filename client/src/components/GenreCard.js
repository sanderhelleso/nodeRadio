import React, { Component } from 'react';

class GenreCard extends Component {
    renderContent() {
        const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country", "R&B", "indie"];
        return categories.map((category) =>
            <div key={category} className="col s4">
                <div className="z-depth-2 card">
                    <div className="card-image">
                        <div className="genreOverlay">
                            <img className="genreCover" src={`img/${category}.jpg`}/>
                        </div>
                        <span className="card-title genreTitle">{category.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container row">
            {this.renderContent()}
            </div>
        )
    }
}

export default GenreCard;