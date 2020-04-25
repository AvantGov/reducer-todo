// * dependencies:
import React from 'react';


// * components: 
import Card from './Card';

const CardContainer = (props) => {
   
    console.log("card container props:", props)

    return (
        <div className="card-container">
            {props.state.data.map((item) => <Card key={item.id} itemId={item.id} listItem={item} completeHandler={props.dispatch}/>)}
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