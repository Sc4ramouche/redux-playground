import { ADD_TODO } from '../actions/actionTypes'

const initialState = {
    todos: [], // this array contains id's of todos
    todosById: {},
}

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.id],
                todosById: { ...state.todosById, [action.id]: action.text },
            }
        default:
            return state
    }
}
