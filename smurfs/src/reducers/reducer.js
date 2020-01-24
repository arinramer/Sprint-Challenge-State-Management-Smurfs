const initialState = {
    smurfs: [{
        name: '',
        age: null,
        height: '',
        id: null
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_SMURFS":
            return {
                smurfs: action.payload
            }
        default:
            return state;
    }
}