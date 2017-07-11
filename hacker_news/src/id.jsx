import React, { Component } from 'react';


class Id extends Component {
    constructor(props) {
      super(props);
        this.state ={id: []
        };
    }
    
    componentDidMount() {
    this.IdList();

  }
    IdList() {
     return fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ ids: data });
      });
    }
    
  
    render() {
      const ids =this.state.ids;
    return (
      <div>
      <h1>News</h1>
      <ul>
      <li>{ids}</li>
      </ul>
       
      </div>
    );
  } 
}

export default Id