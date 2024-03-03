import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="text-center mt-5">

      <div className='TodoApp '>
        <HeaderComponent />

        {/* //Routes--------------------- */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/welcome/:username' element={<WelcomeComponent />} />
            <Route path='/todos' element={<ListTodoComponent />} />
            <Route path='/logout' element={<LogoutComponent />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>

        <FooterComponent />

      </div>
    </div>
  );
}

function LoginComponent() {


  //Hooks ---------------
  const [userName, setUsername] = useState('Rohitkarma')
  const [password, setPassword] = useState('')

  const [showSuccessMessage, setshowSuccessMessage] = useState(false)
  const [showErrorMessage, setshowErrorMessage] = useState(false)

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    // console.log(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  }

  const handleSubmit = () => {
    if (userName === 'Rohitkarma' && password === 'rohit2003') {
      console.log("seccessfull");
      setshowSuccessMessage(true);
      setshowErrorMessage(false);
      navigate(`/welcome/${userName}`);
    }
    else {
      console.log("failed");
      setshowSuccessMessage(false);
      setshowErrorMessage(true);
    }
  }




  return (
    <div className="Login">
      <div>Login component </div>

      {/* logic - true && 'name' > returns name  */}
      {showSuccessMessage && <div className="successMessage">Authentication Succsessfull</div>}
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


function WelcomeComponent() {

  const { username } = useParams()
  console.log(username)

  return (
    <div className="welcomeComponent">
      <h1> Welcome {username}</h1>
      <div>
        Your todos. <Link to="/todos">Go here</Link>
      </div>
    </div>
  )
}
function ErrorComponent() {
  return (
    <div className="errorComponent">
      <h1>Error Component</h1>
      <div>
        Apologies for the 404. Reach out to our team at 9ad-suvos-jicc-vlc.
      </div>
    </div>
  )
}

function ListTodoComponent() {
  const today = new Date();

  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());



  const todos = [
    { id: 1, description: 'learn AWS', done: false, targetDate: targetDate },
    { id: 2, description: 'learn devOps', done: false, targetDate: targetDate },
    { id: 3, description: 'learn C++', done: false, targetDate: targetDate },
    { id: 4, description: 'learn Java', done: false, targetDate: targetDate }

  ]

  return (
    <div className="listTodoComponent">
      <h1>List Tdod Component</h1>
      <div>
        <table>

          <thead>
            <tr>
              <td>Id</td>
              <td>Discription</td>
              <td>isDone?</td>
              <td>Target Date</td>
            </tr>
          </thead>

          <tbody>

            {
              todos.map(
                todo => (
                  <tr key={todo.id}>

                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toDateString()}</td>
                  </tr>
                )
              )
            }

          </tbody>

        </table>
      </div>
    </div>
  )
}


function HeaderComponent() {
  return (
    <div className="header">
      Header <hr />
    </div>
  )
}
function FooterComponent() {
  return (
    <div className="footer">
      <hr /> Footer
    </div>
  )
}

function LogoutComponent() {
  return (
    <div className="logoutComponent">
      <h1>You are logged out </h1>
      <div>
        thank you fof using our app.
      </div>
    </div>
  )
}