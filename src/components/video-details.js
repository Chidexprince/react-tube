import React from 'react';

const VideoDetail = ({videos}) => {

    if(!videos) {
        <h4>Loading....</h4>
    } 
    
    const videoId = videos ? videos.id.videoId : '';
    const url = videos ? 'https://www.youtube.com/embed/' + videoId : 'Loading...'; 

    return (
        <div className="video-detail mt-4">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title={videos ? videos.snippet.title : 'Loading...'}></iframe>
            </div>

            <div className="detail mt-4">
                <div>{videos ? videos.snippet.title : 'Loading...'}</div>
                <div>{videos ? videos.snippet.description : 'Loading...'}</div>
            </div>
        </div>
    )
}

export default VideoDetail