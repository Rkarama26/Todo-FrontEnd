import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';





export default function LoginComponent() {


  //Hooks ---------------
  const [userName, setUsername] = useState('Rohitkarma')
  const [password, setPassword] = useState('')

  //const [showSuccessMessage, setshowSuccessMessage] = useState(false)
  const [showErrorMessage, setshowErrorMessage] = useState(false)

  const navigate = useNavigate();

  const authContext = useAuth();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
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
      <div>Login component </div>

      {/* logic - true && 'name' > returns name  */}
      {showErrorMessage && <div className="errorMessage">Authentication Failed</div>}
      <div className="LoginForm ">
        <div>
          <label htmlFor="">User Name: </label>
          <input type="text" name="username" value={userName} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type='button' name="login" onClick={handleSubmit} > Login</button>
        </div>
      </div>
    </div>
  );
}












