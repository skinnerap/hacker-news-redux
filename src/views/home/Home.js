import React from 'react';

import classes from './Home.module.css';

import SearchInput from '../../components/SearchInput';
import SearchChoice from '../../components/SearchChoice';
import SearchSubmit from '../../components/SearchSubmit';
import SearchResults from '../../components/SearchResults';
import SearchTerms from '../../components/SearchTerms';

const Home = ( ) => {

    return (
        <div className={classes.Content}>

            <h1>Search Hacker News</h1>

            <SearchTerms />
            <SearchInput />
            <SearchChoice />
            <SearchSubmit /> 
            <SearchResults />
            
        </div>
    )

}

export default Home;