import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosByUsername } from "./TodoApiService";
import { useNavigate } from 'react-router-dom';




export default function ListTodoComponent() {
  //const today = new Date();

 // const authContext = useAuth()

 // const username = useAuth.userName

 // const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

  const [todos, setTodos] = useState([])

  const [message, setMessage] = useState([])

   const navigate =  useNavigate()

  // const todos = [
  //   { id: 1, description: 'learn AWS', done: false, targetDate: targetDate },
  //   { id: 2, description: 'learn devOps', done: false, targetDate: targetDate },
  //   { id: 3, description: 'learn C++', done: false, targetDate: targetDate },
  //   { id: 4, description: 'learn Java', done: false, targetDate: targetDate }

  // ]

  useEffect(
    () => refreshTodos(), []
  )

  function refreshTodos() {
    retrieveAllTodosByUsername('rohit')
      .then(response => {
        console.log(response.data)
        setTodos(response.data)
      }
      )
      .catch(error => console.log(error))
  }
  function deleteTodo(id) {
    console.log("delete todo clicked " + id)
    deleteTodoApi(id)
      .then(
        () => {
          setMessage(`Delete of todo ${id} successful`)
          refreshTodos()
        }
      )
  }

  function updateTodo(id) {
    console.log("update todo clicked " + id)

    navigate(`/todos/${id}`)
  }



  return (
    <div className="container">
      <h1>Things You Want To Do!</h1>
      {setMessage && <div className="alert alert-warning">{message}</div>}

      <div className="table-responsive">
        <table className="table table-striped">

          <thead>
            <tr>
              <th>Discription</th>
              <th>isDone?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>

            {
              todos.map(
                todo => (
                  <tr key={todo.id}>

                    <td>{todo.description}</td>

                    <td>{todo.done.toString()}</td>

                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                    <td>{todo.targetDate.toString()}</td>

                    <td><button className="btn btn-warning"
                      onClick={() => deleteTodo(todo.id)}>Delete</button></td>

                    <td><button className="btn btn-success"
                      onClick={() => updateTodo(todo.id)}>Update</button></td>
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