import React from "react";

class Hw4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: '',
            converted: ''
        }
    }
    handleChange = (event) => {
        const input = event.target.value;
        this.setState({res: input, converted:this.convert(input)})
    }

    convert = (num) => {
        if (Number.isNaN(num)) {
            return num;
        }
        let n = +num;
        if (n % 1 !== 0) {
            return num;
        }
        if (n > 20 || n < 10) {
            let tmp = n % 10;
            if (tmp === 1) {
                return num + "st";
            }
            if (tmp === 2) {
                return num + "nd";
            }
            if (tmp === 3) {
                return num + "rd";
            }
        }
        return num + "th";
    }
    render() {
        return (
            <div>
            <input onChange={this.handleChange} value={this.state.res}></input>
            <label>{this.state.converted}</label>
            </div>
        )
    }

}

export default Hw4;