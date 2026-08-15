import type { Task, TaskFormData, TaskStatus } from "../types/task.ts"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"

type TaskSectionProps = {
  tasks: Task[]
  onAddTask: (FormData: TaskFormData) => void
  onChangesStatus: (id: number, status: TaskStatus) => void
  onDeleteTask: (id: number) => void
}

function TaskSection({ tasks, onAddTask, onChangesStatus,  onDeleteTask  }: TaskSectionProps) {
  return (
    <>
      <div>
        <TaskForm 
          onAddTask={onAddTask}
        />
        <TaskList
          tasks={tasks}
          onChangesStatus={onChangesStatus}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </>
  )
}

export default TaskSection