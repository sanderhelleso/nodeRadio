import React, { Component } from 'react';
import categories from "../vars/categories";

class Sidebar extends Component {
    componentWillMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
        });

        console.log(categories);
    }

    render() {
        return (
            <ul id="slide-out" className="sidenav">
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
                <li className="user-view">
                    <div className="background">
                        <img src="/img/landing.jpg" className="responsive-img"></img>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Sidebar
