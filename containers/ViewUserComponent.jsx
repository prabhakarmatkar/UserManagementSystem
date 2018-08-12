import React from 'react';
import commonFunctions from '../common/commonFunctions.js';

class ViewUserComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
        }
    }

   render() {
      return (
         <div>
            <table>
                <tr>
                    <td>
                    First Name:
                    </td>
                    <td>
                    {this.props.user.first_name}
                    </td>
                </tr>
                <tr>
                    <td>
                    Last Name:
                    </td>
                    <td>
                    {this.props.user.last_name}
                    </td>
                </tr>
                <tr>
                    <td>
                    Age:
                    </td>
                    <td>
                    {`${commonFunctions.calculateAge(this.props.user.dob)} years`}
                    </td>
                </tr>
                <tr>
                    <td>
                    Date of Birth:
                    </td>
                    <td>
                    {commonFunctions.formatDob(this.props.user.dob)}
                    </td>
                </tr>
                <tr>
                    <td>
                    Email:
                    </td>
                    <td>
                    {this.props.user.email}
                    </td>
                </tr>
                <tr>
                    <td>
                    Mobile:
                    </td>
                    <td>
                    {this.props.user.phone}
                    </td>
                </tr>
                <tr>
                    <td>
                    Active: 
                    </td>
                    <td>
                    {this.props.user.active == true ? <span style={{color:"green"}}>Active</span>
                                :<span style={{color:"red"}}>Inactive</span>}
                    </td>
                </tr>
            </table>
         </div>
      );
   }
}

export default ViewUserComponent;