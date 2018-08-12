import React from 'react';
import actions from '../actions/userActions.js';
import commonFunctions from '../common/commonFunctions.js';
import {Link} from 'react-router-dom';
import Table from './TableComponent.jsx';
import ViewUserComponent from './ViewUserComponent.jsx';
import ManageUserComponent from './ManageUserComponent.jsx';
import { TextField, Button, Dialog, DialogTitle, DialogContent } from '../node_modules/@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

class UsersComponent extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            loading:false,
            users:[],
            displayUsers:[],
            viewUser:{},
            editUser:{},
            manageUserOpen:false,
            manageUser:{
                            id: null,
                            first_name: "",
                            last_name: "",
                            email: "",
                            phone: "",
                            dob: '',
                            active: false
                        },
            manageUserType:"add",
            viewDialog:false,
            headers :[
                    {
                        name:"Name",
                        prop:"first_name",
                        formatter:(row) => {
                            return (<Link to={`User/${row.id}`}>{row.first_name} {row.last_name}</Link>)
                        }
                    },
                    {
                        name:"Dob",
                        prop:"dob",
                        formatter:(row) => {
                            return(commonFunctions.formatDob(row.dob));
                        }
                    },
                    {
                        name:"Age",
                        prop:"age",
                        formatter:(row) => {
                            return (
                                <div>
                                {`${commonFunctions.calculateAge(row.dob)} years`}
                                </div>
                            );
                        }
                    },
                    {
                        name:"Email",
                        prop:"email"
                    },
                    {
                        name:"Mobile",
                        prop:"phone"
                    },
                    {
                        name:"Active",
                        prop:"active",
                        formatter:(row) => {
                            return (
                                <div>
                                {row.active == true ? <p style={{color:"green"}}>Active</p>
                                :<p style={{color:"red"}}>Inactive</p>}
                                </div>
                            );
                        }
                    },
                    {
                        name:"Actions",
                        props:actions,
                        formatter:(row) => {
                            return (
                                <div>
                                    <Button size = "small" color = "primary" id="view" name="view" onClick = {
                                        (e) =>
                                        {
                                            this.viewUser(row);
                                        }
                                    }>
                                    View
                                    </Button>
                                    <Button size = "small" color = "primary" id = "edit" name="edit" onClick = {
                                        (e) =>
                                        {
                                            this.editUser(row);
                                        }
                                    }>
                                    Edit
                                    </Button>
                                    <Button size = "small" color = "primary" id = "changeStatus" name="changeStatus" onClick = {
                                        (e) =>
                                        {
                                            this.changeStatus(row);
                                        }
                                    }>
                                    {row.active == true?"Deactivate":"Activate"}
                                    </Button>
                                    </div>
                            );
                        }
                    }

                ]
        }
    }

    viewUser(row)
    {
        this.state.viewUser = row;
        this.setState({viewDialog:true});
    }
    handleViewClose()
    {
        this.state.viewUser = {};
        this.setState({viewDialog:false});
    }
    editUser(row)
    {
        this.state.manageUserOpen = true;
        this.state.manageUserType = "edit";
        this.setState({manageUser:row});
    }
    changeStatus(row)
    {
        let data = {"active":!(row.active)}
        this.setState({loading:true});
        actions.changeStatus(this.handleChangeStatusResponse.bind(this),row.id,data);
    }
    handleChangeStatusResponse(data)
    {
        actions.getUsers(this.setUsers.bind(this));
    }

    componentDidMount()
    {
        this.setState({loading:true});
        actions.getUsers(this.setUsers.bind(this));
    }

    onSubmit(id,data,type)
    {
        this.setState({loading:true});
        (type == "add"
            ?
                actions.addUser(this.handleSubmitResponse.bind(this),data)
            :
                actions.updateUser(this.handleSubmitResponse.bind(this),id,data)
        )
        
    }
    handleSubmitResponse(res)
    {
        this.state.manageUserOpen = false;
        this.state.manageUser = {
            id: null,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            dob: '',
            active: false
        };
        actions.getUsers(this.setUsers.bind(this));
    }
    handleManageUserClose()
    {
        this.state.manageUser = {
            id: null,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            dob: '',
            active: false
        };
        this.setState({manageUserOpen:false});
    }


    setUsers(data)
    {
        this.setState({users : data,loading:false});
        this.setState({displayUsers : data});
    }

   render() {
       
      return (
         <div>
             <h3>User List</h3>
             <br/>
             Search user: &nbsp;
            <TextField onChange = {(e) => {
                this.state.displayUsers = this.state.users.filter((user,k) => {
                    return user.first_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 
                    || user.last_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 
                    || user.email.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
                });
                this.setState({displayUsers:this.state.displayUsers});
            }}/>
            <br/>
            <div align="right">
            <Button size = "small" color = "primary" id = "add" name="add" onClick = {
                                        (e) =>
                                        {
                                            this.setState({manageUserOpen:true,manageUserType:"add"});
                                        }
                                    }>
                                    Add User
                                    </Button>
                                    </div>
            <br/>
            {this.state.loading && <CircularProgress />}
            <Table data = {this.state.displayUsers} header = {this.state.headers}/>


            <Dialog open={this.state.viewDialog} onClose={this.handleViewClose.bind(this)}
            classes={{
                overflowY: 'auto',
                overflowX: 'hidden',
                width:"90%",
                marginLeft:"10%",
                marginTop:"5%" }
              }>
                <DialogTitle>View User</DialogTitle>
                <DialogContent classes={{
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                width:"90%",
                                marginLeft:"10%",
                                marginTop:"5%" }
              }>
                <ViewUserComponent user={this.state.viewUser}/>
                </DialogContent>
                </Dialog>

                <Dialog open={this.state.manageUserOpen} onClose={this.handleManageUserClose.bind(this)}>
                <DialogTitle>{this.state.manageUserType == "add"?"Add User" : "Update User"} </DialogTitle>
                <DialogContent classes={{
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                width:"90%",
                                marginLeft:"10%",
                                marginTop:"5%" }
              }>
              <ManageUserComponent 
                                onCancel = {this.handleManageUserClose.bind(this)} 
                                onSubmit={this.onSubmit.bind(this)} 
                                type={this.state.manageUserType} 
                                user={this.state.manageUser}/>
              </DialogContent>
                </Dialog>
         </div>
      );
   }
}
export default UsersComponent;