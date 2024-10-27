import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'

function TodoForm() {
    const [inputText, setInputText] = useState('');
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!inputText) return;
        addTodo({task: inputText, completed: false});
        setInputText("")
    }

    return (
    <form className='flex w-full justify-center' onSubmit={add}>
        <input 
        className='bg-[#1f2833] w-1/2 min-w-80 outline-none text-white px-2 py-1 text-lg rounded-l-lg'
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter your task...'
        />

        <button
        type='submit'
        className='bg-transparent text-[#66fcf1] border-[#66fcf1] border px-3 rounded-r-lg font-normal'
        >Add</button>
    </form>
    )
}

export default TodoForm