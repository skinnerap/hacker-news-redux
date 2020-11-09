import * as actionTypes from '../actions/actionTypes';

// Used for initial page load
const initialState = {
    userInput: '',
    searchType: 'title',
    searchResults: [],
    userSearches: []
}

const rootReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case ( actionTypes.SEARCHUSERINPUT ) :
            return {
                ...state,
                userInput: action.payload
            };

        case ( actionTypes.SEARCHSUBMIT ) :
            const updatedSearchTerms = addSearchTerm(state, action.payload.searchTerm);
            return {
                ...state,
                searchResults: action.payload.results,
                userSearches: updatedSearchTerms
            }

        case ( actionTypes.DELETESEARCHTERM ) :
            const updatedTerms = deleteSearchTerm(state, action.payload);
            return {
                ...state,
                userSearches: updatedTerms
            }

        case ( actionTypes.UPDATESEARCHTYPE ) : 
            return {
                ...state,
                searchType: action.payload
            }

        default :
            return state;

    }
    
};

// This method will add the passed term into the userSearches array if it does not exist already in the array
const addSearchTerm = ( state, term ) => {

    // NOTE: DO NOT DIRECTLY MUTATE PASSED VARIABLE: 'state'

    // Create a deep clone copy of the userSearches array
    const terms = [...state.userSearches];

    // If this term does not exist in the userSearches array
    if(terms.indexOf(term) === -1) {
        terms.push(term);
    }

    return terms;
}

// This method will delete the passed term from the userSearches array
const deleteSearchTerm = ( state, term ) => {

    // NOTE: DO NOT DIRECTLY MUTATE PASSED VARIABLE: 'state'

    // Create a deep clone copy of the userSearches array
    const terms = [...state.userSearches];

    const termIndex = terms.indexOf(term);

    if(termIndex === 0) {
        return terms.slice(1);
    }
    else {
        const leftArr = terms.slice(0, termIndex);
        const rightArr = terms.slice(termIndex + 1);
        return leftArr.concat(rightArr);
    }

}

export default rootReducer;