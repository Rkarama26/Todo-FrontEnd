import { useParams, Link } from 'react-router-dom';



export default function WelcomeComponent() {

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