import React from 'react'

import './App.css'
import { AddTodo, TodoList } from './components'

function App() {
    return (
        <div className="App">
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App
