// * dependencies:
import React, { useState } from 'react';
// import { initialState, todoReducer } from '../reducers/index';



const FormContainer = (props) => {

    const [ newItem, setNewItem ] = useState('')
    // const [ state, dispatch ] = useReducer(todoReducer, initialState)

    //  * handle change with the setNewItem() to state 
    const handleChange = (event) => {
        setNewItem(event.target.value);
    }

    return (
        <div className="form-container">
            <form className="form-container__form" onSubmit={(event) => {
                event.preventDefault();
                props.dispatch({ type: "ADD_ITEM", payload: newItem });
                setNewItem('');
            }}>
                <input 
                    className="form-container__input"
                    type="text"
                    placeholder="new item"
                    name="newItem"
                    onChange={handleChange}
                    value={newItem}
                />
                <button className="form__button" type="submit">Add Item</button>
            </form>
            <button className="form-container__button">Clear Completed</button>
            {/* need to use this to complete the fitler method on completed items */}
        </div>
    )
}

export default FormContainer;