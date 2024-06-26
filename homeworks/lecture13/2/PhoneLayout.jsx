import React, { Component } from 'react';
import './PhoneLayout.css';

class PhoneLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedButton: null
        }
    };

    handleButtonClick = (number) => {
        this.setState({ clickedButton: number });
    }

    render(){
        return(
            <div className="phone-layout">
                <div className="status-bar">
                    {this.state.clickedButton !== null
                        ? `Clicked button: ${this.state.clickedButton}`
                        : 'status bar'}
                </div>
                <div className="buttons-grid">
                    {[...Array(20).keys()].map((number) => (
                        <button
                            key={number + 1}
                            className={this.state.clickedButton === number + 1 ? 'clicked' : ''}
                            onClick={() => this.handleButtonClick(number + 1)}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>

            </div>
        )
    }
}

export default PhoneLayout;