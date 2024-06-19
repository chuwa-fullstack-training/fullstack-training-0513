import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoList extends React.Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        let {todos, updateTodo} = this.props;
        return (
            <ul>
                {
                    todos?.map(item => {
                        return <TodoItem key={item.id} {...item} updateTodo={updateTodo}/>;
                    })
                }
            </ul>
        )
    }

}