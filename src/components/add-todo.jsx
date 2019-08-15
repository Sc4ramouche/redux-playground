import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'

class AddTodo extends React.Component {
    state = {
        input: '',
    }

    handleInput = event => {
        this.setState({ input: event.target.value })
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input)
        this.setState({ input: '' })
    }

    render() {
        return (
            <div className="container">
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInput}
                />
                <button
                    type="button"
                    onClick={this.handleAddTodo}
                >
                    Add Todo
                </button>
            </div>
        )
    }
}

AddTodo = connect(
    null,
    { addTodo }
)(AddTodo)
export { AddTodo }
