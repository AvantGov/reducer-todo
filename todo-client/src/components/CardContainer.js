// * dependencies:
import React, { Component } from 'react';

// * components: 
import Card from './Card';


class CardContainer extends Component {

    constructor () {
        super();
        this.state = {
            data: [
                {
                    name: 'Learn about reducers',
                    completed: false,
                    id: 3892987589
                  }
            ]
        }
    }

    completeHandler = (itemId) => {
        console.log('item id:', itemId);

        this.setState({
            data: this.state.data.map((item) =>{
                return (itemId === item.id) ? { ...item, completed: !item.completed} : item
            })
        })
    }

    render() {
        return (
            <div className="card-container">
                {this.state.data.map((item) => 
                    <Card listItem={item} key={item.id} completeHandler={this.completeHandler} />
                )}
            </div>
        )
    }

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