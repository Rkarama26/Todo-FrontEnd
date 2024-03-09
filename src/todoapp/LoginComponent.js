import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';





export default function LoginComponent() {


  //Hooks ---------------
  const [userName, setuserName] = useState('Rohitkarma')
  const [password, setPassword] = useState('')

  //const [showSuccessMessage, setshowSuccessMessage] = useState(false)
  const [showErrorMessage, setshowErrorMessage] = useState(false)

  const navigate = useNavigate();

  const authContext = useAuth();

  const handleuserNameChange = (event) => {
    setuserName(event.target.value);
    // console.log(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  }

  const handleSubmit = () => {
    if (authContext.login(userName, password)) {
      navigate(`/welcome/${userName}`);
    }
    else {
      setshowErrorMessage(true);
    }
  }




  return (
    <div className="Login">
      <div className="loginHeader">
        <h2>Login</h2>
      </div>
      {showErrorMessage && (
        <div className="errorMessage alert alert-danger alert-dismissible fade show" role="alert" style={{ fontSize: '0.875rem' }}>
          Authentication Failed
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <div className="loginForm">

        <div>
          <label htmlFor="userName">userName:</label>
          <input type="text" id="userName" name="userName" value={userName} onChange={handleuserNameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}












