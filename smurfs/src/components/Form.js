import React, { useState } from 'react';
import { addSmurf } from '../actions/index';
import { connect } from 'react-redux';

const Form = props => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [height, setHeight] = useState()
    const handleName = e => {
        setName(e.target.value)
    }
    const handleAge = e => {
        setAge(e.target.value)
    }
    const handleHeight = e => {
        setHeight(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(name, age, height);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input style={{margin: '1%'}} placeholder="name" value={name} onChange={handleName}></input>
            <br/>
            <input style={{margin: '1%'}} placeholder="age" value={age} onChange={handleAge}></input>
            <br/>
            <input style={{margin: '1%'}} placeholder="height" value={height} onChange={handleHeight}></input>
            <br/>
            <button>Submit</button>
        </form>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { addSmurf })(Form)