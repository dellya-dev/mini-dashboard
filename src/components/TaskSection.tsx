import type { Filter, Task, TaskFilter, TaskFormData, TaskStatus } from "../types/task.ts"
import FilterBar from "./FilterBar.tsx"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"
import '../App.css'

type TaskSectionProps = {
  tasks: Task[]
  onAddTask: (FormData: TaskFormData) => void
  onChangesStatus: (id: number, status: TaskStatus) => void
  onDeleteTask: (id: number) => void
  setFilter: (filter: Filter) => void
  filter: TaskFilter
  error: string
  setError: (value: string) => void
}

function TaskSection({ tasks, onAddTask, onChangesStatus,  onDeleteTask, setFilter, filter, error, setError }: TaskSectionProps) {
  return (
    <>
      <div className="task-section">
        <TaskForm 
          onAddTask={onAddTask}
          error={error}
          setError={setError}
        />
        <FilterBar 
          setFilter={setFilter}
          filter={filter}
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