import React from 'react';
import {BrowserRouter as Router,HashRouter,Route,Link} from 'react-router-dom';
import UsersComponent from "./containers/UsersComponent.jsx";
import UserDetailComponent from "./containers/UserDetailComponent.jsx";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
   render() {
      return (
         <div>            
            
            <HashRouter>
                <div>
                <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
          User Management System
          </Typography>
        </Toolbar>
      </AppBar>   
                <Route exact path="/"component={UsersComponent}/>
                <Route path="/users" component={UsersComponent}/>
                <Route path="/user/:id" component={UserDetailComponent}/>
                </div>
                </HashRouter>
         </div>
      );
   }
}
export default App;