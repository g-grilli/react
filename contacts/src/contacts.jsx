import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './contacts.css';

var default_contacts = [{name: 'Sue', email: 'sue@gmail.com', phone: '832-222-5555', address: '123 Baker Street', city: 'Houston', state: 'Texas', zipCode: '77040'}, {name: 'Steve', email: 'Steve@gmail.com', phone: '832-555-2222', address: '123 Cook Street', city: 'Houston', state: 'Texas', zipCode: '77041'}];
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: default_contacts
    };
  }
  
update_state (event, key) {
console.log(event.target.value);  
this.setState({[key]: event.target.value});
}  

handleSubmit(event) {
  console.log('submitted: ' + this.state.name +' '+ this.state.email);
  event.preventDefault();
}

handleAddContact = () => {
  this.state.contacts.push({name: this.state.name, email: this.state.email, phone: this.state.phone, address: this.state.address, city: this.state.city, state: this.state.state, zipCode: this.state.zipCode});
  this.setState({contacts: this.state.contacts});
  this.setState({name: ' ', email: ' ', phone: ' ', address: ' ', city: ' ', state: ' ', zipCode: ' '})
}
handleEditContact = () => {
  this.state.contacts.push({name: this.state.name, email: this.state.email, address: this.state.address, city: this.state.city, state: this.state.state, zipCode: this.state.zipCode});
  this.setState({contacts: this.state.contacts});
  this.setState({name: ' ', email: ' ', phone: ' ', address: ' ', city: ' ', state: ' ', zipCode: ' '})
}
handleDeleteContact = () => {
  this.state.contacts.push({name: this.state.name, email: this.state.email, address: this.state.address, city: this.state.city, state: this.state.state, zipCode: this.state.zipCode});
  this.setState({contacts: this.state.contacts});
  this.setState({name: ' ', email: ' ', address: ' ', phone: ' ', city: ' ', state: ' ', zipCode: ' '})
}
handleExpandChange = (expanded) => {
  this.setState({expanded: expanded});
};

    render() {
    return (
      <div>
       <AppBar title="Contacts" />
       <form onSubmit={event => this.handleSubmit(event)}>
       <Card className="md-card">
        <CardTitle title="Contact Editing" subtitle="Friends"/>
          <CardText>
           <TextField floatingLabelText="Name"
           value={this.state.name}
           onChange={event => this.update_state(event, 'name')}/>
           <br/><br/>
           <TextField floatingLabelText="E-mail"
           value={this.state.email}
           onChange={event => this.update_state(event, 'email')}/>
           <br/><br/>
            <TextField floatingLabelText="Phone"
           value={this.state.phone}
           onChange={event => this.update_state(event, 'phone')}/>
           <br/><br/>
           <TextField floatingLabelText="Street Address"
           value={this.state.address}
           onChange={event => this.update_state(event, 'address')}/>
           <br/><br/>
           <TextField floatingLabelText="City"
           value={this.state.city}
           onChange={event => this.update_state(event, 'city')}/>
           <br/><br/>
           <TextField floatingLabelText="State"
           value={this.state.state}
           onChange={event => this.update_state(event, 'state')}/>
           <br/><br/>
           <TextField floatingLabelText="Zip Code"
           value={this.state.zipCode}
           onChange={event => this.update_state(event, 'zipCode')}/>
          </CardText>
          <CardActions>
           <RaisedButton type="submit" label='ADD' primary={true} onClick={this.handleAddContact}/>
           <RaisedButton type="submit" label='EDIT' primary={true} onClick={this.handleAddContact}/>
           <RaisedButton type="submit" label='DELETE' primary={true} onClick={this.handleAddContact}/>
          </CardActions> 
       </Card>
       </form>
       <div>
          <AppBar title="Contact List" />
          {this.state.contacts.map((c) => {
            return (
              <Card className="md-card">
                <CardHeader
                 title={c.name}
                 subtitle={c.city}
                 actAsExpander={true}
                 showExpandableButton={true}
                />
                <CardText expandable={true}>
                  {c.name}<br/><br/>
                  Address:<br/><br/>
                  {c.address}<br/>
                  {c.city}, {c.state}, {c.zipCode}
                  <br/><br/>
                  phone:{c.phone}
                  <br/><br/>
                  E-mail: {c.email}
                </CardText>
                <CardActions>
                 <FlatButton label="Favorite" onTouchTap={this.handleFavorite} />
                 <FlatButton label="Hide" onTouchTap={this.handleHide} />
                </CardActions>
              </Card>
            )
          })}
       </div>
      </div>
    );
  } 
}

export default Contacts