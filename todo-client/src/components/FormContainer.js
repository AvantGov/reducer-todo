// * dependencies:
import React, { Component } from 'react';

class ToDoForm extends Component {

    constructor () {
        super ();
        this.state = {
            item: '',
            completed: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
        // console.log("input change:", event.target.value);
    }

    handleSubmit = (event) => {
        // building out use local storage hook to store the values of the list 
    }

    render () {
        return (
            <div className="todo-form">
                <form className="todo-form__form">
                    <input 
                        className="form__input"
                        type='text'
                        placeholder="new item"
                        name="itemInput"
                        onChange={this.handleChange}
                    ></input>
                    <button 
                        className="form__button"
                        // onClick={handleSubmit}
                    >Create Item</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm;