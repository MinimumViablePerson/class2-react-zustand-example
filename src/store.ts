import create from 'zustand'

type Todo = {
  id: number
  title: string
  completed: boolean
}

type Store = {
  count: number
  down: () => void
  up: () => void
  reset: () => void
  todos: Todo[]
  addTodo: (title: string) => void
}

export const useStore = create<Store>((set, get) => ({
  count: 0,
  down: () => set({ count: get().count - 1 }),
  up: () => set({ count: get().count + 1 }),
  reset: () => set({ count: 0 }),
  todos: [
    {
      id: 1,
      title: 'buy milk',
      completed: true
    },
    {
      id: 2,
      title: 'cook dinner',
      completed: true
    },
    {
      id: 3,
      title: 'learn zustand',
      completed: false
    }
  ],
  addTodo: (title: string) => {
    const newTodo = { id: Math.random(), title: title, completed: false }
    const todosCopy = structuredClone(get().todos)
    todosCopy.push(newTodo)
    set({ todos: todosCopy })
  }
}))
