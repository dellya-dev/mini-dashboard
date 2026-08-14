import type { Task } from "../types/task.ts"
import TaskList from "./TaskList.tsx"

type TaskSectionProps = {
  tasks: Task[]
}

function TaskSection({ tasks }: TaskSectionProps) {
  return (
    <>
      <div>
        <TaskList
          tasks={tasks}
        />
      </div>
    </>
  )
}

export default TaskSection