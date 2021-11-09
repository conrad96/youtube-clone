import React from 'react';
import Search from './components/Search';
import Youtube from './api/Youtube';
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {videos: []}
    }  

    onTermSubmit = async term =>{
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({videos: response.data.items})
    }

    render(){
        return(
            <div className="container">
                <Search onFormSubmit={this.onTermSubmit} />
                <div className="search-results-counter">
                    {this.state.videos.length} results
                </div>                
            </div>          
        );
    }
}

export default App;
