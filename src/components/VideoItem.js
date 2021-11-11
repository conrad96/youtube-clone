import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import './VideoItem.css'

class VideoItem extends React.Component{

    constructor(props){
        super(props)

        TimeAgo.addDefaultLocale(en)        
    }

    dateFormat = date => {                        
        const timeAgo = new TimeAgo('en-US')

        const dateObj = new Date(date);

        return timeAgo.format(dateObj)
    }

    render(){
        const video = this.props.video;
        const snippets = video.snippet;
        const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

        return(
            <div className="row row-video-item">
                <div className="col-md-4">
                    <img src={snippets.thumbnails.medium.url} />
                </div>
                <div className="col-md-8">                    
                    <div className="video-title">
                        {snippets.title}
                    </div>                    
                    
                    <div className="flex-container">
                        <div className="video-views">0 views</div>
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
