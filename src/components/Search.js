import React from 'react';
import './Search.css';

class Search extends React.Component{
    render(){
        return(
            <div className="search-field">
                <form className="search-form">
                    <input type="text" className="form-control" id="search" placeholder="Search" />
                </form>                
            </div>
        );
    }
}

export default Search;
