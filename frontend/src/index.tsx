import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./stylesheet/main.scss"

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Board } from "./components/Board";

class Index extends React.Component {
    render() {
        return <div>
            <button className="btn btn-primary">asd</button>
            <Board number={5}/>
        </div>;
    }
}


ReactDOM.render(<Index/>, document.getElementById("index"));
