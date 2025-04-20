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
      <div className='flex justify-center align-center items-center h-screen'>
        <div class="bg-[#071e1e] text-[#fff4dc] p-8 rounded-xl shadow-lg w-full max-w-2xl">
          <h1 class="text-3xl font-medium mb-6">Create your Todo-List</h1>
          <TodoInput todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
          <TodoList todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
        </div>
      </div>
    </>
  )
}

export default App
