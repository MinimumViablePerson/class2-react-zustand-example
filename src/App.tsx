import { ButtonSection } from './components/ButtonSection'
import { Display } from './components/Display'
import './App.css'
import { TodoList } from './components/TodoList'
import { AddTodoForm } from './components/AddTodoForm'

function App () {
  return (
    <div className='App'>
      <Display />
      <ButtonSection />
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default App
