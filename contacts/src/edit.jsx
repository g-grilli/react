// NOT USED - functionality was added to contactss card.
import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
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
const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class Edit extends Component {
  state = {
    open: false
    };
    
 handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
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
  }
  
update_state (event, key) {
console.log(event.target.value);
console.log(event.target);
this.setState({[key]: event.target.value});
var new_state = {};
new_state[key] = event.target.value;
this.setState({new_state});
//<input type="text" value={this.state.name}
//onChange={event => this.update_name(event)}/>
}  

handleSubmit(event) {
  console.log('submitted: ' + this.state.name +' '+ this.state.email);
  event.preventDefault();
}

handleEditContact = () => {
  this.state.contacts.push({
    name: this.state.name, 
    email: this.state.email, 
    phone: this.state.phone, 
    address: this.state.address, 
    city: this.state.city, 
    state: this.state.state, 
    zipCode: this.state.zipCode,
    isOpened: false
  });
  this.state.contacts.sort(compare);
  this.setState({contacts: this.state.contacts});
  localStorage.contacts =JSON.stringify(this.state.contacts);
  this.setState({open: true});
}

handleExpandChange = (expanded) => {
  this.setState({expanded: expanded});
};

handleExpandChange = (expanded) => {
  this.setState({expanded: expanded});
};
    render() {
      const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
       <Card className="md-card">
        <CardTitle title="Edit Contacts"/>
         <CardText expandable={false}>
          <TextField floatingLabelText="Search"
           onChange={event => this.do_search(event)}/>
         </CardText>
       </Card>
       <form onSubmit={event => this.handleSubmit(event)}>
       <Card className="md-card">
          <CardText>
           <TextField floatingLabelText="Name"
           value={this.state.name}
           onChange={event => this.update_state(event, 'name')}/>
           <br/>
           <TextField floatingLabelText="E-mail"
           value={this.state.email}
           onChange={event => this.update_state(event, 'email')}/>
           <br/>
            <TextField floatingLabelText="Phone"
           value={this.state.phone}
           onChange={event => this.update_state(event, 'phone')}/>
           <br/>
           <TextField floatingLabelText="Street Address"
           value={this.state.address}
           onChange={event => this.update_state(event, 'address')}/>
           <br/>
           <TextField floatingLabelText="City"
           value={this.state.city}
           onChange={event => this.update_state(event, 'city')}/>
           <br/>
           <TextField floatingLabelText="State"
           value={this.state.state}
           onChange={event => this.update_state(event, 'state')}/>
           <br/>
           <TextField floatingLabelText="Zip Code"
           value={this.state.zipCode}
           onChange={event => this.update_state(event, 'zipCode')}/>
          </CardText>
          <CardActions>
            <RaisedButton type="submit" label="Edit Contact" primary={true} onTouchTap={this.handleEditContact}/>
             <Dialog
              title="Edit Contact"
              actions={actions}
              modal={true}
              contentStyle={customContentStyle}
              open={this.state.open}
              >
              A new contact has been added.
             </Dialog>
           <RaisedButton type="submit" label="View Contacts" primary={true} href='./contacts' />
          </CardActions> 
        </Card>
       </form>
      </div>
    );
  } 
}

export default Edit