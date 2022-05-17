import './Register.scss'
import React from 'react';

class Form extends React.Component{
navigation=this.props.navigation
emailError='';
passwordError='';
phoneError='';
confirmPasswordError=''
//constructor
constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    confirmPassword:'',
    fullName:'',
    phone:'',
    tc:false,
    emailValid:'default',
    passwordMatch:'default',
    passwordValid:'default',
    phoneValid:'default',
    formValid:false
  }
}
//check if password and confirmPassword are matching
confirmPassword(){
  if (this.state.password!==this.state.confirmPassword){
    this.state.passwordMatch=false;
    this.confirmPasswordError="Passwords do not match"
  }
  else{
    this.state.passwordMatch=true;
    this.confirmPasswordError='';
  }
}

//validate input fields onChange
inputHandler(e){
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let emailValid=this.state.emailValid;
  let passwordValid=this.state.passwordValid;
  let phoneValid=this.state.phoneValid;

  switch(fieldName) {
    case 'email':
      if(this.state.emailValid==='default'){
        emailValid=false;
      }
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?true:false;
      this.emailError = emailValid ? '' : 'Email is invalid';
      break;
    case 'password':
      if(this.state.passwordValid==='default'){
        passwordValid=false;
      }
      this.confirmPassword()
      passwordValid = value.length >= 6;
      this.passwordError = passwordValid ? '': 'Your password is too short';
      break;
    case 'confirmPassword':
      this.confirmPassword()
      break;
    case 'phone':
      if(this.state.phoneValid==='default'){
        phoneValid=false;
      }
      phoneValid = value.length === 10 && value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)?true:false;
      this.phoneError = phoneValid ? '': 'Enter correct phone number';
      break;
    default:
      break;
  }
  this.setState({ emailValid: emailValid,
                  passwordValid: passwordValid,
                  phoneValid:phoneValid
                },this.validateForm());
}

//validateForm on input change
validateForm() {
  console.log(this.state.emailValid===true && this.state.passwordValid===true && this.state.passwordMatch===true && this.state.phoneValid===true && this.state.fullName!=='')
  if(this.state.emailValid===true && this.state.passwordValid===true && this.state.passwordMatch===true && this.state.phoneValid===true && this.state.fullName!=='')
 { 
  this.setState({formValid: true});}
  else{
    console.log('ok')
  this.setState({formValid: false});
  }
}

//display error message below input fields
registerFormError(val){
  return(
       <span className="registerForm_error" >{val}</span>
  )
}

//submit button handler
submitButton=()=>{
  console.log(this.state)
  if(this.state.formValid){
    // alert('ok')
    this.navigation('/chart')
  }
  else{
    alert('Please fill all fields correctly')
  }
}
//checkbox toggle handler
checkboxFun(e){
if(e.target.checked){
  this.state.tc=true
}
else{
  this.state.tc=false
}
}

render(){
  return(
    <div className="App__registerFormContainer--registerForm">
            <h3>Create an account</h3>
            <label htmlFor="email">Your email address
            <input id="email" type="email" name="email" onChange={(event)=>this.inputHandler(event)} value={this.state.email} className="form-control" />
            </label>
            {this.state.emailValid?'': this.registerFormError(this.emailError)}
            <br/>
            <label htmlFor="password">Your password
            <input id="password" type="password" name="password" onChange={(event)=>this.inputHandler(event)} value={this.state.password} className="form-control" />
            </label>
            {this.state.passwordValid?'': this.registerFormError(this.passwordError)}
            <br/>
            <label htmlFor="confirmPassword">Confirm your password
            <input id="confirmPassword" type="password" name="confirmPassword" onChange={(event)=>this.inputHandler(event)} value={this.state.confirmPassword} className="form-control" />
            </label>
            {this.state.passwordMatch?null: this.registerFormError(this.confirmPasswordError)}
            <br/>
            <label htmlFor="fullName">Your full name
            <input id="fullName" type="text" name="fullName" onChange={(event)=>this.inputHandler(event)} value={this.state.fullName} className="form-control" />
            </label><br/>
            <label htmlFor="phone">Your phone number
            <input id="phone" type="text" name="phone" onChange={(event)=>this.inputHandler(event)} className="form-control" />
            </label>
            {this.state.phoneValid?null: this.registerFormError(this.phoneError)}
            <br/>
            <label htmlFor="tc" className="form-check">
              <input id="tc" name="tc" className="form-check-input" onChange={(event)=>this.checkboxFun(event)} type="checkbox"/>
              I read and agree Terms and Conditions
            </label>
            <button className="btn btn-info createAccount" onClick={this.submitButton}>Create Account</button>
        </div>
  )
}
}

export default Form;
