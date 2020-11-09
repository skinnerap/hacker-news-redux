import React from 'react';
import { connect } from 'react-redux';
import classes from './Search.module.css';

const SearchResults = ( props ) => {

    return (    
        props.items.map(item => (
            <div
                className={classes.SearchResult}
                key={item.objectID}
            >
                    
                <span>
                    <a href={item.url} target="_blank" rel="noreferrer">
                        {/* Truncates the item's title if it is over 60 characters*/}
                        {item.title.length > 60 ? item.title.substring(0, 50) + '...' : item.title}
                    </a>
                </span>
                    
                <span style={{paddingLeft: '10px'}}>
                    By: {item.author}
                </span>
                    
            </div>    
        ))    
    )
    
}

const mapStateToProps = state => {
    return {
        items: state.searchResults
    }
}

export default connect(mapStateToProps)(SearchResults);