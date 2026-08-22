export type TaskStatus = "todo" | "in-progress" | "completed"

export type TaskPriority = "low" | "medium" | "high"

export type TaskFilter = "all" | "todo" | "in-progress" | "completed"

export type Task = {
  id: number
  title: string
  status: TaskStatus
  priority: TaskPriority
}

export type TaskFormData = {
  title: string
  status: TaskStatus
  priority: TaskPriority
}

export type Filter = "all" | "todo" | "in-progress" | "completed"