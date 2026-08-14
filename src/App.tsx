import type { Task } from "./types/task.ts"
import './App.css'
import TaskSection from "./components/TaskSection.tsx"

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

  return (
    <>
      <TaskSection 
        tasks={initialTasks}
      />
    </>
  )
}

export default App
