import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import PicList from './PicList';
import SearchForm from './SearchForm';

class App extends Component {
  state = {
    dataID: 0,
    data: [],
  }

  addData = (data, searchValue) => {
    let pics = [];
    for (let i = 0; i < data.length; i++) {
      let pic = {
        picId: i,
        thumb: data[i].media.m,
        link: data[i].link,
      };
      pics.push(pic);
    }
    let datum = {
      id: this.state.dataID,
      name: searchValue,
      pics: pics,
    };
    this.setState(prevState => ({
      data: [...prevState.data, datum],
      dataID: prevState.dataID + 1,
    }))
  }

  addCollection = (searchValue) => {
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
      tags: searchValue,
      tagmode: "any",
      format: "json"
    }).done(data => {
      data = data.items.slice(0, 4);
      this.addData(data, searchValue);
    }).fail(err => {
      console.log(`error: ${err}`);
    });
    return true
  }

  deleteCollection = id => {
    let data = [...this.state.data];
    data = data.filter(collection => collection.id !== id);
    this.setState({
      data
    })
  }

  render() {
    const picsToShow = this.state.data.map(datum => (
      <PicList
        key={datum.id}
        id={datum.id}
        name={datum.name}
        pics={datum.pics}
        delete={this.deleteCollection}
      />
    ))
    return (
      <div className="App">
        <SearchForm
          addCollection={this.addCollection}
        />
        {this.state.data.length ? picsToShow : <span className="prompt">input search inquiry
        </span>}
      </div>
    );
  }
}

export default App;
