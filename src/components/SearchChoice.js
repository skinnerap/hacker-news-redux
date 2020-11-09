import React from 'react';
import { connect } from 'react-redux';
import { updateSearchType } from '../store/actions/actionCreator';
import classes from './Search.module.css';

const SearchChoice = ( props ) => {

    return (
        <div className={classes.Center}>
            <span className={classes.SearchTitle}>Search By: </span>
            <label className={classes.SearchType}>
                Story
                <input
                    type='radio'
                    name='SearchType'
                    defaultChecked
                    onClick={ () => props.updateChoice('title') }
                />
            </label>
            <label className={classes.SearchType}>
                Author
                <input
                    type='radio'
                    name='SearchType'
                    onClick={ () => props.updateChoice('author') }
                />
            </label>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInput: state.userInput
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        updateChoice: (type) => dispatch(updateSearchType(type)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchChoice);