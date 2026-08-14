import type { Task } from "../types/task"
import TaskItem from "./TaskItem"

type TaksListProps = {
  tasks: Task[]
}

function TaskList({ tasks }: TaksListProps) {

  return (
    <>
      <div>
        {tasks.map((task) => {
          return (
            <TaskItem 
              key={task.id}
              task={task}
            />
          )
        })}
      </div>
    </>
  )
}

export default TaskList