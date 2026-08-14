import type { Task, TaskFormData } from "../types/task.ts"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"

type TaskSectionProps = {
  tasks: Task[]
  onAddTask: (FormData: TaskFormData) => void
}

function TaskSection({ tasks, onAddTask }: TaskSectionProps) {
  return (
    <>
      <div>
        <TaskForm 
          onAddTask={onAddTask}
        />
        <TaskList
          tasks={tasks}
        />
      </div>
    </>
  )
}

export default TaskSection