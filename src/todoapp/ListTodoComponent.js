



export default function ListTodoComponent() {
    const today = new Date();
  
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());
  
  
  
    const todos = [
      { id: 1, description: 'learn AWS', done: false, targetDate: targetDate },
      { id: 2, description: 'learn devOps', done: false, targetDate: targetDate },
      { id: 3, description: 'learn C++', done: false, targetDate: targetDate },
      { id: 4, description: 'learn Java', done: false, targetDate: targetDate }
  
    ]
  
    return (
      <div className="container">
        <h1>Things You Want To Do!</h1>
        <div className="table-responsive">
          <table className="table table-striped">
  
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