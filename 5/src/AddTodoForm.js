import { useState } from 'react'

function AddTodoForm(props) {
  const { todos, setTodos } = props

  const [ value, setValue ] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, value])
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)}/>
      <button>add</button>
    </form>
  )
}

export default AddTodoForm
