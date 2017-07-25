import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-default custom-navbar navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#"> <img class="img-responsive" id="nav-image" src="./images/aura_main.png" alt="Salon Aura Logo" /></a>
                            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Book Now</a></li>
            </ul>
        </div>
    </nav>
            </div>
        )
    }
}

export default Navbar;