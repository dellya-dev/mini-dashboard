import { useState, type ChangeEvent } from "react"
import type { TaskFormData } from "../types/task"

type TaskFormProps = {
  onAddTask: (FormData: TaskFormData) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {

  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    status: "todo",
    priority: "medium",
  })

  function handleFormDataInput(e: ChangeEvent<HTMLInputElement>) {
    setFormData(
      {
        ...formData, 
        [e.target.name]: e.target.value
      }
    )
  }

  function handleFormDataSelect(e: ChangeEvent<HTMLSelectElement>) {
    setFormData(
      {
        ...formData, 
        [e.target.name]: e.target.value
      }
    )
  }

  function handleAddButton() {
    onAddTask(formData)
    setFormData({
      ...formData, 
      title: "",
      status: "todo",
      priority: "medium"
    })
  }

  return (
    <>
      <div>
        <input 
          type="text" 
          name="title"
          value={formData.title}
          placeholder="Add Task here..."
          onChange={handleFormDataInput}
        />

        <select 
          name="status" 
          id=""
          value={formData.status}
          onChange={handleFormDataSelect}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In-progress</option>
            <option value="completed">Completed</option>
          </select>

          <select 
            name="priority" 
            id="priority"
            value={formData.priority}
            onChange={handleFormDataSelect}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button onClick={handleAddButton}>Add</button>
      </div>
    </>
  )
}

export default TaskForm