import React from 'react'
import { connect } from 'react-redux'

let TodoList = ({ todosById }) => (
    <ul>
        {Object.keys(todosById).map(todoId => (
            <li key={todoId}>{todosById[todoId]}</li>
        ))}
    </ul>
)

const mapStateToProps = ({ todosById }) => {
    return { todosById }
}

TodoList = connect(mapStateToProps)(TodoList)
export { TodoList }
