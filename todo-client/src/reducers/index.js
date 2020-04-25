export const initialState = {
    data: [
        {
            name: 'learn about reducers',
            id: 3892987589,
            completed: false
        }
    ]
}


export const todoReducer = ( state, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            console.log('ADD ITEM RAN', state)
            return {
                ...state,
                data: [ ...state.data, {
                    name: action.payload,
                    id: Date.now(),
                    completed: false
                }]
            }

        case "TOGGLE_COMPLETE":
            console.log('toggle complete')
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, completed: !item.completed }
                    } else {
                        return item;
                    }
                })
                // * ternerary operator:
                // (item.id === action.payload) ? { ...item, completed: !item.completed} : item
            }
        case "FILTER_COMPLETE":
            console.log('filter ran')
            return {
                ...state, 
                data: state.data.filter((item) => !item.completed)
            }
        default:
            return state
    }
}

 
