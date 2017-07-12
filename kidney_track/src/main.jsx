import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardActions, CardText} from 'material-ui/Card';
import logo from './logo.svg';
import './App.css'

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <Card className="md-card">
           <CardTitle title="Medications"/>
          </Card>
          <Card className="md-card">
           <CardTitle title="Weight & Blood Pressure"/>
          </Card>
          <Card className="md-card">
           <CardTitle title="Appointments"/>
          </Card>
          <Card className="md-card">
           <CardTitle title="Doctor Questions"/>
          </Card>
          
        </div>
      </div>
    );
  }
}
export default Main
  
