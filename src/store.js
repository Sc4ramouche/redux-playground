import { createStore } from 'redux'

import { todoApp } from './reducers/rootReducer'

export const store = createStore(todoApp)
