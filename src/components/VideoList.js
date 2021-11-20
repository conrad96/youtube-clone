import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{

    render(){
        const videos = this.props.videos;        

        return(
            <div>
                {
                    videos.map( video => {
                        return <VideoItem onVideoSelect={this.props.onVideoSelected} video={video} key={video.id.videoId} />
                    })
                }
            </div>
        )
    }
}

export default VideoList;
