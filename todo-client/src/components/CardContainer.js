// * dependencies:
import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/index';

// * components: 
import Card from './Card';

const CardContainer = () => {
   const [ state, dispatch ] = useReducer(todoReducer, initialState)

    return (
        <div className="card-container">
            {console.log(state)}
            {state.data.map((item) => <Card key={item.id} listItem={item} />)}
        </div>
    )
}

export default CardContainer;


// * handling complete changes long form, without ternerary operator: 
// completeHandler = (itemId) => {
//     console.log('item id:', itemId);

//     this.setState({
//         data: this.state.data.map((item) => {
//             if ( itemId === item.id ) {
//                 return {
//                     ...item,
//                     completed: !item.completed
//                 }
//             } else {
//                 return item
//             }
//         })
//     })
// }


// * handling changes short form, with ternary operator: 
// completeHandler = (itemId) => {
//     console.log('item id:', itemId);

//     this.setState({
//         data: this.state.data.map((item) =>{
//             return (itemId === item.id) ? { ...item, completed: !item.completed} : item
//         })
//     })
// }