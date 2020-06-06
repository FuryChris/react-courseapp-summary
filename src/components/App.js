//   class based components - will hold all of different states from applicaiton.
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

const KEY = "yt key ;)";


class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async (term) => {
        // .get because yt func is preconfigured function of axios
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });
        this.setState({ videos: response.data.items });
        console.log(this.state)

    };

    render() {
        return (
            <div className="ui container">
                {/* onFormSubmit - that could be any name of that prop. I chose onFormSubmit. that could be also onTermSubmit. :) */}
                <SearchBar callWhenSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;