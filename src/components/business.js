import React from "react";

class Business extends React.Component {
    render() {
        return(
            <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="custom-button">
                          <button onClick={()=>{
                        this.props.handleClick(this.props.joke)
                    }} ></button>
                    </div>
                </div>
            </div>    
            <div className="row">
                <div className="col-md-12">
                    <div className="background">
                    <div id="joke">{this.props.joke}</div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Business;