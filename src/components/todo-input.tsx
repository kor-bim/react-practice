'use client'

import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'

interface TodoInputProps {
  onAdd: (text: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <div className={'w-full flex flex-row items-center justify-center gap-1'}>
      <Input
        fullWidth
        type="text"
        value={inputValue}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSubmit()}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
      />
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  )
}

export default TodoInput
