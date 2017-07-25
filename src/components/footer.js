import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <div className="row custom-footer">
                <div className="col-md-4">
                    <div className="footer email"><a href="#"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a></div>
                </div>
                <div className="col-md-4">
                    <div className="footer website"><a href="https://www.facebook.com/SalonSpaAura/"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a></div>
                </div>
                <div className="col-md-4">
                    <div className="footer address">2021 S. Windsor St.<br/>Salt Lake City, UT 84105</div>
                </div>
            </div>
        )
    }
}

export default Footer;