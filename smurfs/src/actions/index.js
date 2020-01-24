import axios from 'axios';

export const getSmurfs = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: "FETCH_SMURFS", payload: res.data })
    })
}

export const addSmurf = (name, age, height) => dispatch => {
    axios.post('http://localhost:3333/smurfs', {
        name: name,
        age: age,
        height: height,
    })
}