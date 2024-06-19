import React from "react"

export default class TodoItem extends React.Component {
    
    handleChange = id => {
        return event => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    render() {
        let {id, name, done} = this.props;
        return (
            <li>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)}>
                    </input>
                    <span>{name}</span>
                </label>
            </li>
        )
    }

}