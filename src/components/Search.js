import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''}
    }

    searchField = evt => {
        this.setState({term: evt.target.value});        
    }

    onFormSubmit = evt => {
        evt.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="search-field">
                <form className="search-form" onSubmit={this.onFormSubmit} >
                    <div className="input-group">
                        <input type="text" onChange={evt=> this.searchField(evt) } className="form-control" id="search" placeholder="Search" value={this.state.term} />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </form>                
            </div>
        );
    }
}

export default Search;
