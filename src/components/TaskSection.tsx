import type { Filter, Task, TaskFormData, TaskStatus } from "../types/task.ts"
import FilterBar from "./FilterBar.tsx"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"

type TaskSectionProps = {
  tasks: Task[]
  onAddTask: (FormData: TaskFormData) => void
  onChangesStatus: (id: number, status: TaskStatus) => void
  onDeleteTask: (id: number) => void
  setFilter: (filter: Filter) => void
}

function TaskSection({ tasks, onAddTask, onChangesStatus,  onDeleteTask, setFilter  }: TaskSectionProps) {
  return (
    <>
      <div>
        <TaskForm 
          onAddTask={onAddTask}
        />
        <FilterBar 
          setFilter={setFilter}
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