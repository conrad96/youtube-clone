import React from 'react';
import Search from './components/Search';
import Youtube from './api/Youtube';
import VideoList from './components/VideoList';
import './App.css'
import Logo from './assets/YouTube-Logo.png'

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
            <div>
                <div className="header">
                    <div className="row">
                        <div className="col-md-2">
                            <a href="/"><img src={Logo} alt="Logo" className="logo-youtube" /></a>
                        </div>
                        <div className="col-md-10">
                            <Search onFormSubmit={this.onTermSubmit} /> 
                        </div>
                    </div>
                    
                </div>       
                
                <div className="container">
                    <div className="video-list">
                        <VideoList videos={this.state.videos} />
                    </div>  
                </div>                             
            </div>          
        );
    }
}

export default App;
