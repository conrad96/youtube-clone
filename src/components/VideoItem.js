import React from 'react'
import './VideoItem.css'

class VideoItem extends React.Component{
    render(){
        const video = this.props.video;
        const snippets = video.snippet;
        const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

        return(
            <div className="row row-video-item">
                <div className="col-md-4">
                    <img src={snippets.thumbnails.medium.url} alt={snippets.description} />
                </div>
                <div className="col-md-8">
                    {snippets.title}
                </div>
            </div>
        );
    }
}

export default VideoItem;
