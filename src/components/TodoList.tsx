import { useStore } from '../store'

export function TodoList () {
  const todos = useStore(state => state.todos)
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.title}</li>
      ))}
    </ul>
  )
}
