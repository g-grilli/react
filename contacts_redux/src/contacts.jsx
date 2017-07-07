import React, {Component} from 'react';

import {Card, CardHeader, CardTitle, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import database, {User} from './fsociety';
import './contacts.css';

import {editContact, deleteContact} from './actions.js';
import {connect} from 'react-redux';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      phone: ' ',
      email: ' ',
      address: ' ',
      city: ' ',
      state: ' ',
      zipCode: ' ',
      isOpened: ' ',
      contacts: []
    };
    
    console.log(this.props);
    //this.read_data();
  }
  
  update_state (event, key) {
  console.log(event.target.value);
  console.log(event.target);
  this.setState({[key]: event.target.value});
  var new_state = {};
  new_state[key] = event.target.value;
  this.setState({new_state});
}  

handleSubmit(event) {
  console.log('submitted: ' + this.state.name +' '+ this.state.email);
  event.preventDefault();
}

handleEditContact = (index) => {
  console.log(this.props);
  this.props.onSubmit(index);
  this.setState({open: true});
}

handleDeleteContact = (index) => {
  console.log(this.props);
  this.props.doDelete(index);
}

handleField (event, field, index) {
  console.log(this.props);
  this.props.contacts[index][field] = event.target.value;
  this.props({contacts: this.state.contacts});
//  this.state.contacts[index][field] = event.target.value;
//  this.setState({contacts: this.state.contacts});
}

handleExpandChange = (expanded) => {
  this.setState({expanded: expanded});
};

do_search (event) {
  var term = event.target.value;
  var filter_contacts = [];
  
  this.state.contacts.forEach(function (c) {
    if (c.name.toLowerCase().search(term.toLowerCase()) > -1) {
      filter_contacts.push(c);
    }
  });
  this.setState({display_contacts: filter_contacts});
}

    render() {
    return (
      <div>
       <Card className="md-card">
        <CardTitle title="Search Contacts"/>
         <CardText expandable={false}>
          <TextField floatingLabelText="Search"
           onChange={event => this.do_search(event)}/>
         </CardText>
       </Card>
       <Card className="md-card">
        <CardTitle title="Contact List" subtitle="Click Name For Details"/>
       </Card>
       {this.props.contacts.map((c, index) => {
        return (
         <Card className="md-card">
          <CardHeader
            title={c.name}
            subtitle={c.city}
            actAsExpander={true}
            showExpandableButton={true}/>
          <CardText expandable={true}>
            <TextField floatingLabelText="Name" value={c.name} onChange={(event) => this.handleField(event, 'name', index)}/><br/>
            Address:<br/>
            <TextField floatingLabelText="Address" value={c.address} onChange={(event) => this.handleField(event, 'address', index)} />
            <br/>
            <TextField floatingLabelText="City" value={c.city} onChange={(event) => this.handleField(event, 'city', index)}/> 
            <TextField floatingLabelText="State" value={c.state} onChange={(event) => this.handleField(event, 'state', index)}/> 
            <TextField floatingLabelText="Zip Code" value={c.zipCode}onChange={(event) => this.handleField(event, 'zipCode', index)}/>
            <br/><br/>
            <TextField floatingLabelText="Phone" value={c.phone}onChange={(event) => this.handleField(event, 'phone', index)}/>
            <br/><br/>
            <TextField floatingLabelText="E-mail" value={c.email}onChange={(event) => this.handleField(event, 'email', index)}/>
            <CardActions>
             <FlatButton label="Favorite" primary={true} onTouchTap={this.handleMakeFavorite} />
             <FlatButton type="submit" label='DELETE' primary={true} onClick={() => this.handleDeleteContact(index)}/>
             <FlatButton type="submit" label='EDIT' primary={true} onClick={() => this.handleEditContact(index)} />
             </CardActions>
            </CardText>
          </Card>
            )
          })}
        <Card className="md-card"> 
        <CardActions> 
          <RaisedButton type="submit" label="Add Contacts" primary={true} href='./add' />
          </CardActions>
        </Card>
       </div>
    );
  } 
}

function mapStateToProps (state) {
  return {contacts: state}
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (index, data) {
      dispatch(editContact(index, data))
    },
    doDelete: function (index) {
      dispatch(deleteContact(index))
    } 
  }
}

Contacts =  connect(
  mapStateToProps, mapDispatchToProps)(Contacts);


export default Contacts
