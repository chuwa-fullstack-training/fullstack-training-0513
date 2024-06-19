import React from 'react';
import {v4 as uuidv4} from 'uuid'

export default class Header extends React.Component {


    handleKeyUp = (event) => {
        let {keyCode, target} = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === "") {
            alert('input should not be empty!');
            return;
        }
        const todo = {
            id: uuidv4(),
            name: target.value,
            done: false
        }
        // clear input text
        target.value = ''

        // update todolist
        this.props.addTodo(todo);
    }

    render() {

        return (
            <div>
                <input onKeyUp={this.handleKeyUp} placeholder="Type a todo and hit Enter"></input>
            </div>
        )
    }

}