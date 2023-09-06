import { useState, useEffect, useCallback } from 'react'
import { addToDB, getAllTodos, updateTodoInDB, deleteTodoInDB, Todo } from '@/utils/idb'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getAllTodos().then((items) => {
      setTodos(items)
    })
  }, [])

  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text
    }

    addToDB(newTodo).then(() => {
      setTodos((prevTodos) => [...prevTodos, newTodo])
    })
  }, [])

  const deleteTodo = useCallback((id: number) => {
    deleteTodoInDB(id).then(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    })
  }, [])

  const updateTodo = useCallback((id: number, newText: string) => {
    const updatedTodo: Todo = { id, text: newText }

    updateTodoInDB(updatedTodo).then(() => {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) return updatedTodo
          return todo
        })
      })
    })
  }, [])

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo
  }
}
