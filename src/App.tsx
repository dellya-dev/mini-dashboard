import { type Filter, type Task, type TaskFormData, type TaskStatus } from "./types/task.ts"
import './App.css'
import TaskSection from "./components/TaskSection.tsx"
import { useState } from "react"
import Overview from "./components/Overview.tsx"
import Header from "./components/Header.tsx"
import Sidebar from "./components/Sidebar.tsx"


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
  const [filter, setFilter] = useState<Filter>("all")

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

  const filteredTasks =
    tasks.filter((task) => {
      if (filter === "todo") {
        return task.status === "todo"
      } else if (filter === "in-progress") {
        return task.status === "in-progress"
      } else if (filter === "completed") {
        return task.status === "completed"
      } else {
        return "all"
      }
    })

  const totalTasks = tasks.length

  const totalTodo = tasks.filter((task) => task.status === "todo").length

  const todoRate = totalTodo / totalTasks * 100

  const totalInProgress = tasks.filter((task) => task.status === "in-progress").length

  const inProgressRate = totalInProgress / totalTasks * 100

  const totalCompleted =  tasks.filter((task) => task.status === "completed").length
  
  const completionRate = totalCompleted / totalTasks * 100

  return (
    <>
      <Header />
      <Sidebar />
      <Overview
        totalTasks={totalTasks}
        totalTodo={totalTodo}
        todoRate={todoRate}
        totalInProgress={totalInProgress}
        inProgressRate={inProgressRate}
        totalCompleted={totalCompleted}
        completionRate={completionRate}
      />

      <TaskSection
        tasks={filteredTasks}
        onAddTask={handleAddTask}
        onChangesStatus={handleChangesStatus}
        onDeleteTask={handleDeleteTask}
        setFilter={setFilter}
      />
    </>
  )
}

export default App
