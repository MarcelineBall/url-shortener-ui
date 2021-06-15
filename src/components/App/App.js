import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  createShortUrl = (newUrlToShorten) => {
    console.log('newUrlToShorten', newUrlToShorten)
    postUrl(newUrlToShorten)
      .then(() => getUrls())
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls: data.urls }))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm createShortUrl={this.createShortUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
