import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";

import "./styles.css";
import Navbar from "./components/navbar.js";
import BusinessContainer from "./containers/business_container.js";


import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    
                    <BusinessContainer />
                    
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));