import React, { Component } from 'react';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        date: new Date(),
        people: [
          {id: 1, name: 'Paul'},
          {id: 2, name: 'Paulette'}
        ]
      };
}
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  handleClick(event, person) {
    if (person.selected) {
      person.selected = false;
    } else {
      person.selected = true;
    }
  
    this.setState({people: this.state.people});
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.name} did you know</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <ul>
          {this.state.people.map((person) =>
            <li key={person.id}>
              <button onClick={this.handleClick}>
                <span className={person.selected ? 'selected' : 'not'}>  
                  {person.name}
                </span>
              </button>
            </li>
            )}
        </ul>
      </div>
    );
  }
}

export default HelloMessage;