import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getSmurfs } from '../actions/index';
import Form from './Form';

const Smurfs = props => {
    useEffect(() => {
        props.getSmurfs()
    },[props.smurfs])
    return(
        <div>
            <Form />
            {props.smurfs.map(item => 
                <Smurf name={item.name} age={item.age} height={item.height} key={item.id}/>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs);