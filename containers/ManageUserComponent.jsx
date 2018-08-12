import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DatePicker } from 'material-ui-pickers';

class ManageUserComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
    user:JSON.parse(JSON.stringify(this.props.user)),
    initialUser:this.props.user,
    type:this.props.type,
    errors : {first_nameError: false,
      last_nameError: false,
      emailError: false,
      phoneError: false,
      dobError: false}
        }
    }
    componentDidMount()
    {
      this.validate.bind(this)();
    }

    validate(){
      var isError=false;
      this.state.errors = {first_nameError: false,
      last_nameError: false,
      emailError: false,
      phoneError: false,
      dobError: false};
      if(this.state.user.first_name.length <= 0)
      {
        isError=true;
        this.state.errors.first_nameError = true;
      }
      if(this.state.user.last_name.length <= 0)
      {
        isError=true;
        this.state.errors.last_nameError = true;
      }
      if(this.state.user.email.length <= 0 || this.state.user.email.indexOf("@") == -1)
      {
        isError=true;
        this.state.errors.emailError = true;
      }
      if(this.state.user.phone.length != 10 || !(/^\d{10}$/.test(this.state.user.phone)))
      {
        isError=true;
        this.state.errors.phoneError = true;
      }
      if(this.state.user.dob.length <= 0)
      {
        isError=true;
        this.state.errors.dobError = true;
      }
      this.setState({errors:this.state.errors});
        return isError;
    }

buttonClick()
{
}
onSubmit()
{
  var error = this.validate.bind(this)();
  if(!error)
  {

    var postData = {
        first_name: this.state.user.first_name,
      last_name: this.state.user.last_name,
      email: this.state.user.email,
      phone: this.state.user.phone,
      dob: this.state.user.dob,
      active: this.state.user.active
    }
    this.props.onSubmit(this.state.user.id,postData,this.state.type);
  }
}

handleDateChange(date) {
  this.state.user.dob = new Date(date).toString();
  this.setState({ user : this.state.user });
  this.validate.bind(this)();
}

onChange(e)
{
    this.state.user[e.target.id] = e.target.value;
    this.setState({ user:this.state.user});
    this.validate.bind(this)();
}

   render() {
      return (
         <div>            
            <br/>
            <TextField
            error = {this.state.errors.first_nameError}
          id="first_name"
          label="First Name"
          value={this.state.user.first_name}
          onChange={e => this.onChange(e)}
          margin="normal"
        />
        <br/>
        <TextField
          id="last_name"
          label="Last Name"
          value={this.state.user.last_name}
          onChange={e => this.onChange(e)}
          margin="normal"
          error={this.state.errors.last_nameError}
        />
        <br/>
        <TextField
          id="email"
          label="email"
          value={this.state.user.email}
          onChange={e => this.onChange(e)}
          margin="normal"
          error={this.state.errors.emailError}
        />
        <br/>
        <TextField
          id="phone"
          label="Phone"
          type="number"
          value={this.state.user.phone}
          onChange={e => this.onChange(e)}
          margin="normal"
          error={this.state.errors.phoneError}
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          showMask
        />
        <br/>
        <DatePicker
            label="Date of Birth"
            id="dob"
            format="DD/MMM/YYYY"
            value={this.state.user.dob == ''? new Date():this.state.user.dob}
            onChange={this.handleDateChange.bind(this)}
            animateYearScrolling={false}
            maxDate={new Date()}
            error={this.state.errors.dobError}
          />
            <br/>
            <Button size = "small" color = "primary" onClick={(e) => this.onSubmit(e)}> {this.state.type == "add" ? "Add":"Update"}</Button>
            <Button size = "small" color = "secondary" onClick={(e) => {
                this.props.onCancel();
            }}>Cancel</Button>
         </div>
      );
   }
}

export default ManageUserComponent;