import React, { Component } from 'react';
import './App.css';
import './assets/bootstrap.css';
import Nav from './components/nav'
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCXnjwoRy-W19WkUUFHJicp7Kh0hp4qOWU';
class App extends Component {

  constructor(props){
    super(props)
    YTSearch({key: API_KEY, term: 'songs'}, (data) => {
      console.log(data)
    })
  }
 
  render () {
    return (
      <div className="container">
      <Nav />
      <div className="row">
        <div className="col-md-8">
          hi
        </div>
      </div>
    </div>
    )
  }
}

export default App;
