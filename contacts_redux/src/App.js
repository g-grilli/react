import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Contacts from './contacts';
import Home from './home';
import Add from './add';
import AppBar from 'material-ui/AppBar';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import './App.css'
import {auth} from './fsociety';

import { Provider } from 'react-redux';
import store from './store.js';

//const Home = () => (<h2>Home</h2>);

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

const AppMenu = (props) => (
  <IconMenu
   iconButtonElement={
      <IconButton><MoreVertIcon color='black'/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem>
      <Link to="/" className="icon-menu">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/contacts" className="icon-menu">Contacts</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/add" className="icon-menu">Add Contact</Link>
    </MenuItem>
  </IconMenu>
);

class App extends Component {
  login () {
    console.log('logging in');
  auth()
    .then(function (user) {
      console.log(user);
    })
    .catch(function (e) {
      console.log(e);
    });
 }
 render() {
  return (
    <Provider store={store}>
     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <BrowserRouter>
         <div>
          <AppBar title='Contact App' 
          iconElementLeft={<AppMenu/>}
          iconElementRight={<FlatButton label="Log In" onClick={(e) => this.login(e)}/>}
          />
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/contacts" component={Contacts}/>
           <Route path="/add" component={Add}/>
           <Route component={NoMatch}/>
          </Switch>
         </div>
        </BrowserRouter>
        </div>
        </MuiThemeProvider>
    </Provider>
  );
 }
}

export default App;
