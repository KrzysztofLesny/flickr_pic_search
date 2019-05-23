import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import PicList from './PicList';
import SearchForm from './SearchForm';

class App extends Component {
  state = {
    dataID: 0,
    searchValue: '',
    data: [],
  }

  addData = data => {
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
      name: this.state.searchValue,
      pics: pics,
    };
    this.setState(prevState => ({
      data: [...prevState.data, datum],
      dataID: prevState.dataID + 1,
      searchValue: ''
    }))
  }

  seachValueChange = e => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  searchSubmit = e => {
    e.preventDefault();
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
      tags: this.state.searchValue,
      tagmode: "any",
      format: "json"
    }).done(data => {
      data = data.items.slice(0, 4);
      this.addData(data);
    }).fail(err => {
      console.log(`error: ${err}`);
    });
  }

  render() {
    const picsToShow = this.state.data.map(datum => (
      <PicList
        key={datum.id}
        name={datum.name}
        pics={datum.pics}
      />
    ))
    return (
      <div className="App">
        <SearchForm
          change={this.seachValueChange}
          value={this.state.searchValue}
          submit={this.searchSubmit}
        />
        {this.state.dataID ? picsToShow : <p>type search term</p>}
      </div>
    );
  }
}

export default App;
