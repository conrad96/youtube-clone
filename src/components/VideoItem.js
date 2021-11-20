import React from 'react'
import Youtube from '../api/Youtube'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import './VideoItem.css'

class VideoItem extends React.Component{

    constructor(props){
        super(props)

        TimeAgo.addLocale(en) 
        
        this.state = {views: 0}
    }

    dateFormat = date => {                        
        const timeAgo = new TimeAgo('en-US')

        const dateObj = new Date(date);

        return timeAgo.format(dateObj)
    }

    getVideoStatistics = async videoId => {

        // const results = await Youtube.get('/videos',  {
        //     params: {
        //         id: videoId,
        //         part: 'statistics'
        //     }
        // });
                
        // const items = results.data.items;
        
        // const views = items.map(item => {            
        //     return item.statistics.viewCount;
        // });        

        // this.setState({views: views});
    }    

    render(){
        const video = this.props.video;
        const snippets = video.snippet;        
        this.getVideoStatistics(video.id.videoId);

        return(
            <div onClick={() => this.props.onVideoSelect(video)} className="row row-video-item">
                <div className="col-md-4">
                    <img src={snippets.thumbnails.medium.url} alt={snippets.description} />
                </div>
                <div className="col-md-8">                    
                    <div className="video-title">
                        {snippets.title}
                    </div>                    
                    
                    <div className="flex-container">
                        <div className="video-views">{this.state.views} views </div>
                        <div>&nbsp;.&nbsp;</div>
                        <div className="video-date">{this.dateFormat(snippets.publishTime)}</div>
                    </div>
                    <div className="video-detail">
                        <div className="video-channel">
                            {snippets.channelTitle}
                        </div>
                        <div className="video-description">
                            {snippets.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;
