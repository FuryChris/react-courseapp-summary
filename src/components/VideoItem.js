import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
    // props.video props passing through VideoList
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt="no pic found" />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;