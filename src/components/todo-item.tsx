import React, { useState } from 'react'
import { Todo } from '@/utils/idb'
import { Card, CardBody, Button, Input } from '@nextui-org/react'
import { getDateDistance, getDateDistanceText } from '@/libs/date'

interface TodoItemProps {
  todo: Todo
  onDelete: (id: number) => void
  onUpdate: (id: number, newText: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleSave = () => {
    onUpdate(todo.id, editedText)
    setIsEditing(false)
  }

  return (
    <Card className={'w-[49%]'}>
      <CardBody className={'w-full flex flex-col items-start justify-center gap-5'}>
        {isEditing ? (
          <Input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSave()}
            autoFocus
          />
        ) : (
          <span className={'text-xl font-bold'}>{todo.text}</span>
        )}
        <span className={'text-xs'}>
          {getDateDistanceText(getDateDistance(new Date(todo.createdAt), new Date()))} 전 등록
        </span>
        <div className={'w-full flex flex-row items-center justify-between gap-2'}>
          <Button fullWidth color={'danger'} variant={'flat'} onClick={() => onDelete(todo.id)}>
            삭제
          </Button>
          {isEditing ? (
            <React.Fragment>
              <Button fullWidth variant={'flat'} onClick={() => setIsEditing(false)}>
                취소
              </Button>
              <Button fullWidth color={'secondary'} variant={'flat'} onClick={handleSave}>
                저장
              </Button>
            </React.Fragment>
          ) : (
            <Button fullWidth color={'secondary'} variant={'flat'} onClick={() => setIsEditing(true)}>
              수정
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

export default TodoItem
