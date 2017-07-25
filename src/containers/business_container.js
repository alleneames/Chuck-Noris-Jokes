import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import Business from "../components/business";

class BusinessContainer extends React.Component {
    render() {
        return(
            <div>
                <Business joke={this.props.joke} handleClick={this.props.jokeData} />
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(BusinessContainer);

