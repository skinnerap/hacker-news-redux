import React from 'react';
import { connect } from 'react-redux';
import { userInput } from '../store/actions/actionCreator';

import classes from './Search.module.css';

const SearchInput = ( props ) => {

        return (
        <div className={classes.Center}>
            <input
                className={classes.TextInput}
                type='text'
                value={props.ui}
                onChange={props.handleUserInput}
            />
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        ui: state.userInput
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleUserInput: (e) => dispatch(userInput(e.target.value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);