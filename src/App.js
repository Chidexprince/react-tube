import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import './assets/bootstrap.css';
import Nav from './components/nav';
import VideoList from './components/video-list';
import VideoDetail from './components/video-details';


require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    term: 'tom and jerry'
  }

  componentDidMount(){

    this.videoSearch(this.state.term)

  }

  videoSearch = (term) =>{
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }


  onSelectVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  onSearch = (term) => {
    this.setState({
      term: term
    })

    this.videoSearch(this.state.term)

  }
 
  render () {
    return (
      <div className="container-fluid">
        <Nav onSearch={this.onSearch}/>
        <div className="row p-4">
          <div className="col-md-12 col-sm-12 col-lg-8">
            <VideoDetail videos={this.state.selectedVideo} />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4">
            <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
