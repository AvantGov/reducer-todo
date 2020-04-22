import React from 'react';

const Card = (props) => {

    console.log("card props:", props)

    return (
        <div className="card">
            <h1 className="card__title"> {props.listItem.name} </h1>
            <label className="card__label" htmlFor="completed">Complete:</label>
            <input 
                className="card__checkbox" 
                name="completed"
                type="checkbox"
                // onClick={() => props.completeHandler(props.listItem.id)}    
            ></input>
            
        </div>
    )
}
export default Card;