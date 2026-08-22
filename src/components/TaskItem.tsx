import type { ChangeEvent } from "react"
import type { Task, TaskStatus } from "../types/task"
import '../App.css'

type TaskItemProps = {
  task: Task
  onChangesStatus: (id: number, status: TaskStatus) => void
  onDeleteTask: (id: number) => void
}

function TaskItem({ task, onChangesStatus, onDeleteTask }: TaskItemProps) {
  return (
    <>
      <div className="task-item">
        <div className="task-info">
          <h3>{task.title}</h3>
          <p>{task.priority}</p>
        </div>

        <div className="task-actions">
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

          <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
        </div>
      </div>
    </>
  )
}

export default TaskItem