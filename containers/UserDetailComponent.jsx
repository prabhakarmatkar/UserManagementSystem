import React from 'react';
import actions from '../actions/userActions.js';
import commonFunctions from '../common/commonFunctions.js';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class UserDetailComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            loading:false,
            user:{}
        }
    }
    componentWillMount()
    {
        this.setState({loading:true});
        actions.getUserDetails(this.setUsers.bind(this),this.props.match.params.id);
    }

    setUsers(data)
    {
        this.setState({user : data,loading:false});
    }

   render() {
      return (
        <div>
            <h3>User Details</h3>
            <div>
            {this.state.loading?<CircularProgress />
            :
            <table>
                <tr>
                    <td>
                    First Name:
                    </td>
                    <td>
                    {this.state.user.first_name}
                    </td>
                </tr>
                <tr>
                    <td>
                    Last Name:
                    </td>
                    <td>
                    {this.state.user.last_name}
                    </td>
                </tr>
                <tr>
                    <td>
                    Age:
                    </td>
                    <td>
                    {`${commonFunctions.calculateAge(this.state.user.dob)} years`}
                    </td>
                </tr>
                <tr>
                    <td>
                    Date of Birth:
                    </td>
                    <td>
                    {commonFunctions.formatDob(this.state.user.dob)}
                    </td>
                </tr>
                <tr>
                    <td>
                    Email:
                    </td>
                    <td>
                    {this.state.user.email}
                    </td>
                </tr>
                <tr>
                    <td>
                    Mobile:
                    </td>
                    <td>
                    {this.state.user.phone}
                    </td>
                </tr>
                <tr>
                    <td>
                    Active: 
                    </td>
                    <td>
                    {this.state.user.active == true ? <span style={{color:"green"}}>Active</span>
                                :<span style={{color:"red"}}>Inactive</span>}
                    </td>
                </tr>
            </table>
            }
            </div>
            <br/>
            <Button size = "small" color = "primary" onClick={(e) => {
                this.props.history.push("/Users");
            }}>Back</Button>
         </div>
      );
   }
}

export default UserDetailComponent;