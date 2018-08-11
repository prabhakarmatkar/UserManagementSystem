import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
ReactDOM.render(<MuiPickersUtilsProvider utils={MomentUtils}><App /></MuiPickersUtilsProvider>, document.getElementById('app'));