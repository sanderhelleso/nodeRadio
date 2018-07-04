import React, { Component } from 'react';

class GenreCard extends Component {
    renderContent() {
        const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country"];
        return categories.map((category) =>
            <div key={category} className="container">
                <h5>{category}</h5>
            </div>
        );
    }

    render() {
        return (
            <div>
            {this.renderContent()}
            </div>
        )
    }
}

export default GenreCard;