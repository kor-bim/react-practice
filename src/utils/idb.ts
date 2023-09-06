import { kstFormat } from '@/libs/date'

export interface Todo {
  id: number
  text: string
  createdAt: string
}

const dbName = 'todoDB'
const storeName = 'todos'

export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1)

    request.onupgradeneeded = function (event) {
      const db = (event.target as IDBOpenDBRequest).result
      db.createObjectStore(storeName, { keyPath: 'id' })
    }

    request.onsuccess = function (event) {
      resolve((event.target as IDBOpenDBRequest).result)
    }

    request.onerror = function (event) {
      reject(`Error opening db: ${(event.target as IDBOpenDBRequest).error}`)
    }
  })
}

export function addToDB(todo: Todo): Promise<number> {
  return new Promise((resolve, reject) => {
    openDB().then((database) => {
      const transaction = database.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)

      const currentDateTime = kstFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') // 'YYYY-MM-DD HH:MM:SS'
      todo.createdAt = currentDateTime

      const request = store.add(todo)

      request.onsuccess = function () {
        resolve(request.result as number)
      }

      request.onerror = function (event) {
        reject(`Error adding to db: ${(event.target as IDBRequest).error}`)
      }
    })
  })
}

export function getAllTodos(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    openDB().then((database) => {
      const transaction = database.transaction(storeName, 'readonly')
      const store = transaction.objectStore(storeName)
      const request = store.getAll()

      request.onsuccess = function () {
        resolve(request.result as Todo[])
      }

      request.onerror = function (event) {
        reject(`Error adding to db: ${(event.target as IDBRequest).error}`)
      }
    })
  })
}

export function updateTodoInDB(todo: Todo): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    openDB().then((database) => {
      const transaction = database.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)
      const request = store.put(todo)

      request.onsuccess = function () {
        resolve()
      }

      request.onerror = function (event: Event) {
        reject(`Error updating todo in db: ${(event.target as IDBRequest).error}`)
      }
    })
  })
}

export function deleteTodoInDB(id: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    openDB().then((database) => {
      const transaction = database.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)
      const request = store.delete(id)

      request.onsuccess = function () {
        resolve()
      }

      request.onerror = function (event: Event) {
        reject(`Error deleting todo from db: ${(event.target as IDBRequest).error}`)
      }
    })
  })
}
