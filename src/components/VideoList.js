import React from 'react';
import VideoItem from './VideoItem';

// DISTRUCTURING OF PROPS!!  es2015 syntax (equal => (props)  props.videos)
const VideoList = ({ videos }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />
    })


    // props.videos
    return <div class="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;