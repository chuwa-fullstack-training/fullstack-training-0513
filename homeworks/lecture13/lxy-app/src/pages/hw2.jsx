import React from "react";
import "../css/hw2.css"

class HW extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Status bar"
        };
    }
    list = new Array(20).fill(0).map((_val, idx) => idx + 1);

    handleClick = (num) => {
        let updatedStatus = "";
        console.log(this.state.status !== "Status bar")
        if (this.state.status !== "Status bar") {
            updatedStatus = this.state.status;
        }
        // console.log(updatedStatus);
        num += "";
        updatedStatus += num;

        this.setState({ status: updatedStatus });
    }

    render() {
        return (
            <div className="phone-wrapper">
                <div className="phone-screen">
                    <div className="display-field">{this.state.status}</div>
                    <div className="buttons">
                        {this.list.map((num) => {
                            return <button key={num} onClick={() => {this.handleClick(num)}}>{num}</button>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default HW