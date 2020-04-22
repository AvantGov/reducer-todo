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
                completed: action.payload
            }
        default:
            return state
    }
}
