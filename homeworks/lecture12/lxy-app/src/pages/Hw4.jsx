import React from "react";

class Hw4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            convertedRes: ""
        };
    }

    // handleClick = (num) => {
    //     this.setState({
    //         number: this.state.count += num
    //     })
    // }

    handleChange = (e) => {
        const input = e.target.value;
        this.setState({
            number: input,
            convertedRes: this.convertInput(input)
        })

    }
    convertInput = (numStr) => {
        if (!numStr) return '';
        if (Number.isNaN(numStr)) return numStr;
        let num = Number(numStr);

        if (num % 1 !== 0) return numStr;
        
        if (num > 20 || num < 10) {
            let lastDigit = num % 10;
            if (lastDigit === 1) return numStr + 'st';
            else if (lastDigit === 2) return numStr + 'nd';
            else if (lastDigit === 3) return numStr + 'rd';
        }

        return numStr + 'th';
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.number} onChange={this.handleChange} placeholder="Provide your input"></input>
                <input type="text" value={this.state.convertedRes} readOnly ></input>
            </div>
        )
    }
}

export default Hw4