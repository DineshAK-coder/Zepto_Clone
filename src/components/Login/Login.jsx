import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'

export default Login = ({setIsAuthenticated}) => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const onLogin = (event) =>{
    event.preventDefault();
    if(userName != ''){
      setIsAuthenticated(true);
      navigate('/products');
    }
  }
  return(
    <div className = "login-container">
      <h2 className = "login-main-heading">
        Zepto
      </h2>
      <form onSubmit = "onLogin">
        <input type = "text" placeholder = "Enter Username" 
        value = {username} onChange = {event => {setUserName(event.target.value)}}/>
        <button type = "submit" className = "login-button">Login</button>
      </form>
    </div>
  )
}