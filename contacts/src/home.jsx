import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardActions, CardText} from 'material-ui/Card';
import './App.css'

class Home extends Component {
  

    render() {
    return (
      <div>
       <Card className="md-card">
           <CardHeader
            title=Login
            actAsExpander={true}
            showExpandableButton={true}/>
          <CardText expandable={true}>
            <TextField floatingLabelText="Email" value=email/><br/>
            Address:<br/>
            <TextField floatingLabelText="Password" value=password />
            <br/>
          </Card>
       
      </div>
    );
  } 
}



export default Home