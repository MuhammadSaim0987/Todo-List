import { useEffect, useState } from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import TodoForm from './Components/TodoForm'
import './App.css'
import TodoItems from './Components/TodoItems';


function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList((prev) => [{id: Date.now(), ...newTodo}, ...prev]);
  }

  const updateTodo = (id, updateTodo) => {
    setTodoList((prev) => prev.map((prevTodo) => prevTodo.id === id ? updateTodo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  };

  const checkedStatus = (id) => {
    setTodoList((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    if (todoList && todoList.length > 0) {
      setTodoList(todoList);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  },[todoList])

  return (
    <TodoProvider value={{todoList, addTodo, deleteTodo, updateTodo, checkedStatus}} >
      <div className='bg-[#0B0C10] min-h-screen flex flex-col items-center'>
          <h1 className='text-[#66fcf1] text-4xl font-normal text-center pt-8 mb-12'>
            Task Tracker
          </h1>

          <TodoForm />

          <div className='mt-10 w-full flex flex-col items-center min-w-96'>
            {todoList.length > 0 ?
            (todoList.map((task) =>(
              <div className='w-full text-white flex justify-center mt-3 text-lg' key={task.id}>
                <TodoItems task={task}/>
              </div>
            )) 
            ):(
              <p className='text-[#66fcf1] text-xl translate-y-10 mt-5'>No tasks available. Add a new task above!</p>
            )}
          </div>

      </div> 
    </ TodoProvider>
  )
}

export default App
