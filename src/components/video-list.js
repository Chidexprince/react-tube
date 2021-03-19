import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos, onSelectVideo}) => {

    const videoItem = videos.length > 0 ? videos.map((video) => {
        return <VideoListItem onVideoSelect={onSelectVideo} video={video} key={video.etag}/>
    }) : 'Loading Videos...'

    return (
        <ul className="list-group mt-4">
            {videoItem}
        </ul>
    )
}

export default VideoList