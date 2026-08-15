import type { Task, TaskFormData, TaskStatus } from "./types/task.ts"
import './App.css'
import TaskSection from "./components/TaskSection.tsx"
import { useState } from "react"

function App() {
  const initialTasks: Task[] = [
    {
      id: 1,
      title: "Gym",
      status: "todo",
      priority: "high"
    },
    {
      id: 2,
      title: "Study English",
      status: "todo",
      priority: "low"
    },
    {
      id: 3,
      title: "Study TypeScript",
      status: "todo",
      priority: "high"
    }
  ]

  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  function handleAddTask(formData: TaskFormData): void {

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...formData,
      }
    ])
  }

  function handleChangesStatus(id: number, status: TaskStatus): void {
    setTasks((tasks) => tasks.map((task) => task.id === id
      ? { ...task, status }
      : task
    ))
  }

  function handleDeleteTask(id: number): void {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <TaskSection
        tasks={tasks}
        onAddTask={handleAddTask}
        onChangesStatus={handleChangesStatus}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

export default App
