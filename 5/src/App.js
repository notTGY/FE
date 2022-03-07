import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

function App() {
  const [ todos, setTodos ] = useState([])
  return (
    <>
      <header>
        TODO list application
      </header>
      <AddTodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
