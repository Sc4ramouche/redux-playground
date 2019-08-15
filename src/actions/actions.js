import {} from 'redux'
import { ADD_TODO } from './actionTypes'

let todoId = 0

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: ++todoId,
        text,
    }
}
