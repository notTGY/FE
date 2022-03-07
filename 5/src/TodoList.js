import Todo from './Todo'

function TodoList(props) {
  const { todos } = props
  return (
    <>
      {
        todos.map((todo, i) =>
          <Todo key={i} todo={todo}/>
        )
      }
    </>
  )
}

export default TodoList
