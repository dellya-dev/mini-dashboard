export type TaskStatus = "todo" | "in-progress" | "completed"

export type TaskPriority = "low" | "medium" | "high"

export type Tasks = {
  id: number
  title: string
  status: TaskStatus
  priority: TaskPriority
}

export type Filter = "all" | "todo" | "in-progress" | "completed"