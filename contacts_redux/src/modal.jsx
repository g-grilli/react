import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class Modal extends Component {
  state = {
    open: false
    };
    
 handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };  
  
  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.handleAddContact}
      />,
    ];

    return (
      <div>
        <h2>Home</h2>
        <RaisedButton label="Add Contact" onTouchTap={this.handleOpen} />
        <Dialog
          title="Add Contact."
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          A new contact has been added.
        </Dialog>
        <RaisedButton label="Delete Contact" onTouchTap={this.handleOpen} />
        <Dialog
          title="Delete Contact."
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          Contact has been deleted.
        </Dialog>
        
      </div>
    );
  }
}




export default Modal