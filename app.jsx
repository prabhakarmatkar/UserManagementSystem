import React from 'react';
import {BrowserRouter as Router,HashRouter,Route,Link} from 'react-router-dom';
import HomeComponent from "./containers/HomeComponent.jsx";
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
                {/*<ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
                </ul>
              
              <hr />
            */}      


                <Route exact path="/"component={HomeComponent}/>
                <Route path="/home" component={HomeComponent}/>
                <Route path="/users" component={UsersComponent}/>
                <Route path="/user/:id" component={UserDetailComponent}/>
                </div>
                </HashRouter>
         </div>
      );
   }
}
export default App;