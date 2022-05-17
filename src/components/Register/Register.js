import img from './img/bg.png';
import './Register.scss';
import React from 'react';
import Form from './Form'
import { useNavigate } from 'react-router-dom';

function Register () {
  const navigation=useNavigate();
  return (
    <div className="App row">
      <div className="col-lg-6 App__backgroundContainer">
        <img className="row" src={img} alt="bg" width="100%"></img>
        <h4 className="row">Choose a date range</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque turpis, ultricies vitae bibendum ac, suscipit eu arcu.</p>
      </div>
      <div className="col-lg-6 App__registerFormContainer">
        <Form navigation={navigation}/>
      </div>
    </div>
  );

}

export default Register;
