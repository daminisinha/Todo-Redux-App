import React from 'react';
import PropTypes from 'prop-types';
import Todo from './ToDo';

const ToDoList = ({
    todos,onTodoClick
})=>(
    <ul>
    {
        todos.map(todo=>(
            <Todo key={todo.id}{...todo} onClick={()=>onTodoClick(todo.id)}/>
        ))
    }
    
    </ul>
)
ToDoList.propTypes ={
    todos:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick:PropTypes.func.isRequired
}

export default ToDoList