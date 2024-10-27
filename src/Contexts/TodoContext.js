import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todoList: [
        {
            id: 1,
            task: "Todo Text", 
            completed: false
        }
    ],
    addTodo: (newTodo) => {},
    updateTodo: (updateTodo, id) => {},
    deleteTodo: (id) => {},
    checkedStatus: (id) => {},
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
};