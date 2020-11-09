import React from 'react';
import { connect } from 'react-redux';
import { deleteSearchTerm } from '../store/actions/actionCreator';
import classes from './Search.module.css';

const searchTerms = ( props ) => {

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Redux Managed User Search Terms:</h3>
            <ul className={classes.SearchTerms}>
                {props.terms.map((term, ind) => (
                    <li
                        key={ind+term}
                        onClick={() => props.deleteTerm(term)}
                        className={classes.SearchTerm}
                    >
                        {term}
                    </li>
                ))}
            </ul>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        terms: state.userSearches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTerm: (term) => dispatch(deleteSearchTerm(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchTerms);