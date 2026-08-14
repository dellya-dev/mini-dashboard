import type { Task } from "../types/task"

type TaskItemProps = {
  task: Task
}

function TaskItem({task}: TaskItemProps) {
  return (
    <>
      <div>
        <h3>{task.title}</h3>
        <p>{task.status}</p>
        <p>{task.priority}</p>
      </div>
    </>
  )
}

export default TaskItem