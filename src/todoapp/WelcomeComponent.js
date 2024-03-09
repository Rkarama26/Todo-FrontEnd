import { useParams, Link } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { useState } from 'react';
import { retrieveHelloWorldPathVarApi } from './TodoApiService';


export default function WelcomeComponent() {

const [message, setMessage]= useState(null)

  const { username } = useParams()
  console.log(username)

  const callHelloWorldApi = () => {
    console.log("hello")
    
      //  retrieveHelloWorldBean()
      // .then((response)=> successfulResponse(response) )
      // .catch((error)=> errorlResponse(error))
      // .finally(()=>console.log(cleanup))

      retrieveHelloWorldPathVarApi('vansh')
      .then((response)=> successfulResponse(response) )
      .catch((error)=> errorlResponse(error))
      .finally(()=>console.log(cleanup))
      
  }
  const successfulResponse=(response)=>{
    console.log(response)
    setMessage(response.data.message)
  }
  const errorlResponse=(error)=>{
    console.log(error)
  }





  return (
    <div className="welcomeComponent text-center py-5">
    <h1 className="mb-4">Welcome {username}</h1>
    <p className="mb-4">Manage Your Todos. <Link to="/todos" className="btn btn-primary">Go here</Link></p>
    {message && <div className='text-info'>{message}</div>}
</div>
  )
}

