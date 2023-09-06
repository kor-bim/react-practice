'use client'

import TodoItem from '@/components/todo-item'
import { useTodos } from '@/hooks/use-todo'
import TodoInput from '@/components/todo-input'
import { CommonTemplate } from '@/components/common/template'

export default function Home() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos()

  return (
    <CommonTemplate>
      <main className={'relative w-full container mx-auto h-[100dvh] flex flex-col items-center justify-center gap-5'}>
        <span className={'text-3xl font-bold mb-5'}>Todo List</span>
        <TodoInput onAdd={addTodo} />
        <div className={'w-full flex flex-wrap items-center justify-center gap-3'}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />
          ))}
        </div>
      </main>
    </CommonTemplate>
  )
}
