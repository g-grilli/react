import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './contacts.css';


function compare(a,b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } 
      return 0;
}
class Contacts extends Component {
  constructor(props) {
    super(props);
    var contacts = localStorage.contacts || '[]';
    contacts = JSON.parse(contacts);
    this.state = {
      name: ' ',
      phone: ' ',
      email: ' ',
      address: ' ',
      city: ' ',
      state: ' ',
      zipCode: ' ',
      isOpened: ' ',
      contacts: contacts
    };
    this.state.contacts.sort(compare);
    this.state.display_contacts = this.state.contacts;
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
  console.log(this.state.contacts);
  localStorage.contacts =JSON.stringify(this.state.contacts);
  this.setState({open: true});
}

handleField (event, field, index) {
  this.state.contacts[index][field] = event.target.value;
  this.setState({contacts: this.state.contacts});
}

handleDelete (index) {
  this.state.contacts.splice(index, 1);
  this.setState({contacts: this.state.contacts});
  this.state.contacts.sort(compare);
  localStorage.contacts =JSON.stringify(this.state.contacts);
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
       {this.state.display_contacts.map((c, index) => {
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
            <TextField floatingLabelText="City" value={c.city} onChange={(event) => this.handleField(event, 'city', index)}/>, 
            <TextField floatingLabelText="State" value={c.state} onChange={(event) => this.handleField(event, 'state', index)}/>, 
            <TextField floatingLabelText="Zip Code" value={c.zipCode}onChange={(event) => this.handleField(event, 'zipCode', index)}/>
            <br/><br/>
            <TextField floatingLabelText="Phone" value={c.phone}onChange={(event) => this.handleField(event, 'phone', index)}/>
            <br/><br/>
            <TextField floatingLabelText="E-mail" value={c.email}onChange={(event) => this.handleField(event, 'email', index)}/>
            <CardActions>
             <FlatButton label="Favorite" primary={true} onTouchTap={this.handleMakeFavorite} />
             <FlatButton type="submit" label='DELETE' primary={true} onClick={() => this.handleDelete(index)}/>
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
export default Contacts