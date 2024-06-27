import React from "react";
import "../css/hw3.css"

class Hw3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = (num) => {
        this.setState({
            count: this.state.count += num
        })
    }

    render () {
        return (
            <>
                <div className="button-container">
                    <button onClick={ () => {this.handleClick(1)} }>+1</button>
                    <button onClick={ () => {this.handleClick(10)} }>+10</button>
                    <button onClick={ () => {this.handleClick(100)} }>+100</button>
                    <button onClick={ () => {this.handleClick(1000)} }>+1000</button>
                </div>
                <div className="display">{this.state.count}</div>
            </>
        )
    }
}

export default Hw3