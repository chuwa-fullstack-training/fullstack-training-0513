import React from "react";
class Hw3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            res:0
        }
    }
    handleClick = increment => {
       this.setState(prevState => ({res: prevState.res + increment}));
    }

    handleReset = () => {
        this.setState({res:0});
    }
    render() {
        return (
            <>
                <div style={{ display: 'flex' }}>
                    <button onClick={() => {this.handleClick(1)}}>{"+1"}</button>
                    <button onClick={() => {this.handleClick(10)}}>{"+10"}</button>
                    <button onClick={() => {this.handleClick(100)}}>{"+100"}</button>
                    <button onClick={() => {this.handleClick(1000)}}>{"+1000"}</button>
                    <button onClick={this.handleReset}>{"reset"}</button>
                </div>
                <label>{this.state.res}</label>
            </>
        )
    }
}

export default Hw3;