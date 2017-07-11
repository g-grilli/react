import React, { Component } from 'react';


class News extends Component {
    constructor(props) {
      super(props);
        this.state ={    
          by: '',
          descendants: '',
          id: '',
          kids: [],
          score: '',
          time: '',
          title: '',
          type: '',
          url: ''
        };
    }
    
    componentDidMount() {
    this.IdList();

  }
    IdList() {
     return fetch('https://hacker-news.firebaseio.com/v0/item/14737322.json?print=pretty')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({    
          by: data.by,
          descendants: data.descendants,
          id: data.id,
          kids: [],
          score: data.score,
          time: data.time,
          title: data.title,
          type: data.type,
          url: data.url
        });
      });
    }
    
    
    
    render() {
      const by = this.state.by;
      const de = this.state.decendents;
      const id = this.state.id;
      const score = this.state.score;
      const time = this.state.time;
      const title = this.state.title;
      const type = this.state.type;
      const url = this.state.url;
      
      
    return (
      <div>
      <h1>News</h1>
      <p>Title: {title}</p>
      <p>Author: {by}</p>
      <p>Time:{time}</p>
      <p>Type: {type}</p>
      <p>URL: {url}</p>
      </div>
    );
  } 
}

export default News