import { useStore } from '../store'

export function AddTodoForm () {
  const addTodo = useStore(state => state.addTodo)
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        addTodo(event.target.title.value)
        event.target.reset()
      }}
    >
      <input type='text' name='title' />
      <button>ADD TODO</button>
    </form>
  )
}
