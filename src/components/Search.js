import React from 'react';
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
                    <input type="text" onChange={evt=> this.searchField(evt) } className="form-control" id="search" placeholder="Search" value={this.state.term} />
                </form>                
            </div>
        );
    }
}

export default Search;
