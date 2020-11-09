import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../store/actions/actionCreator';
import classes from './Search.module.css';

const SearchSubmit = ( props ) => {
    return (
        <span className={classes.Center}>
            <button
                className={classes.SearchSubmit}
                onClick={() => props.handleSearchSubmit( props.userInput, props.searchType )}
            >
                Submit Search
            </button>
        </span>
    )
}

const mapStateToProps = state => {
    return {
        userInput: state.userInput,
        searchType: state.searchType
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchSubmit: (input, type) => dispatch(getSearchResults(input, type))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSubmit);