import { useState } from 'react'
import './App.css'
import TodoCard from './components/TodoCard'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState(
    [
      'Be a good man'
    ])
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
    </>
  )
}

export default App
