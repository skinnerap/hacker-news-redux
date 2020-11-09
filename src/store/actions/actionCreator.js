import axios from 'axios';
import * as actionTypes from './actionTypes';

export const userInput = ( input ) => {
    return {
        type: actionTypes.SEARCHUSERINPUT,
        payload: input
    }
}

export const getSearchResults = ( searchTerm, searchType ) => {

    let url = null;

    switch(searchType) {

        case('title') :
            url = 'http://hn.algolia.com/api/v1/search?query=' + searchTerm + '&tags=story';
            break;
        case('author') :
            url = 'http://hn.algolia.com/api/v1/search?tags=story,author_' + searchTerm;
            break;
        default :
            url = 'http://hn.algolia.com/api/v1/search?query=' + searchTerm + '&tags=story';
    
    }

    return dispatch => {
        axios.get(url)
        .then(res => {
            dispatch(searchSubmit(res.data.hits, searchTerm))
        }).catch(err => {
            console.log(err);
        });
        
    }
    
}

export const searchSubmit = ( data, input ) => {

    return  {
        type: actionTypes.SEARCHSUBMIT,
        payload: {
            results: data,
            searchTerm: input
        }
    }

}

export const deleteSearchTerm = ( term ) => {

    return {
        type: actionTypes.DELETESEARCHTERM,
        payload: term
    }

}

export const updateSearchType = ( type ) => {

    return {
        type: actionTypes.UPDATESEARCHTYPE,
        payload: type
    }
}