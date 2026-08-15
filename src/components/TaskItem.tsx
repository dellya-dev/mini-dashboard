import type { ChangeEvent } from "react"
import type { Task, TaskStatus } from "../types/task"

type TaskItemProps = {
  task: Task
  onChangesStatus: (id: number, status: TaskStatus) => void
  onDeleteTask: (id: number) => void
}

function TaskItem({ task, onChangesStatus, onDeleteTask }: TaskItemProps) {
  return (
    <>
      <div>
        <h3>{task.title}</h3>
        <select 
          name="status" 
          id="status"
          value={task.status}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChangesStatus(task.id, e.target.value as TaskStatus)}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        <p>{task.priority}</p>
        <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
      </div>
    </>
  )
}

export default TaskItem