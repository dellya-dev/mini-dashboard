import type { Task, TaskStatus } from "../types/task"
import TaskItem from "./TaskItem"

type TaksListProps = {
  tasks: Task[]
  onChangesStatus: (id: number, status: TaskStatus) => void
  onDeleteTask: (id: number) => void
}

function TaskList({ tasks, onChangesStatus, onDeleteTask }: TaksListProps) {

  return (
    <>
      <div>
        {tasks.map((task) => {
          return (
            <TaskItem 
              key={task.id}
              task={task}
              onChangesStatus={onChangesStatus}
              onDeleteTask={onDeleteTask}
            />
          )
        })}
      </div>
    </>
  )
}

export default TaskList