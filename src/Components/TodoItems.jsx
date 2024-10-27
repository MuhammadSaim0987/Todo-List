import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext';

function TodoItems({task}) {
    const [isEditable, setIsEditable]= useState(false);
    const [taskMsg, setTaskMsg] = useState(task.task)
    
    const{checkedStatus, deleteTodo, updateTodo} = useTodo();

    const checkedStatusClicked = () => {
        checkedStatus(task.id);
    }; 

    const editTodo = () => {
        updateTodo({...task, task: taskMsg}, task.id);
        setIsEditable(false);
    };

return (
    <div className={`w-1/2 min-w-96 bg-[#1f2833] px-3 py-1 flex items-center justify-around rounded-lg 
    ${task.completed ? "border-black border bg-[#1f283391]" : "border-[#66fcf1] border"} gap-2`}>
        <input 
        type="checkbox"
        checked={task.completed}
        onChange={checkedStatusClicked}
        />
        
        <input 
        className={`w-5/6 bg-transparent px-2 pb-1 rounded-lg ${task.completed ? "line-through" : ""} ${isEditable ? "outline" : "outline-none"}`}
        value={taskMsg}
        onChange={(e) => setTaskMsg(e.target.value)}
        readOnly={!isEditable}
        type="text" 
        />

        <button
        className='bg-black px-2 py-1 mr-1 rounded-lg my-0.5'
        disabled={task.completed}
        onClick={() => {
            if(task.completed) return;
            isEditable ? editTodo() : setIsEditable((prev) => !prev);
        }}
        >
        {isEditable ? "📁" : "✏️"}
        </button>

        <button
        className='bg-black px-2 py-1 rounded-lg translate-x-1'
        onClick={() => deleteTodo(task.id) }
        >
        🗑️
        </button>
    </div>

)
}

export default TodoItems