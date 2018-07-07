import React, { Component } from 'react';
import "materialize-css/dist/js/materialize.min.js";

class Sidebar extends Component {
    componentWillMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
        });
    }

    render() {
        return (
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="/img/landing.jpg" />
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Sidebar
