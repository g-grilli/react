import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import logo from './logo.svg';
//import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import MyForm from './myform';

const theme = getMuiTheme({
  palette: {primary1Color: red700}
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <MyForm/>
      </MuiThemeProvider>
    );
  }
}

export default App;
