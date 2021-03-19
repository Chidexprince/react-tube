import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    
    const imgUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item list-group-item-action">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} alt="Video Loading..."/>
                </div>

                <div className="media-body ml-2">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem