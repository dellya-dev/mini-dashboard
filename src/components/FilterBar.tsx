import type { Filter, TaskFilter} from "../types/task"
import '../App.css'

type FilterBarProps = {
  setFilter: (filter: Filter) => void
  filter: TaskFilter
}

function FilterBar({ setFilter, filter }: FilterBarProps) {

  return (
    <>
      <div className="filter-bar">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >All
        </button>

        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >Todo
        </button>

        <button
          className={filter === "in-progress" ? "active" : ""}
          onClick={() => setFilter("in-progress")}
        >In-Progress
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >Completed
        </button>
      </div>
    </>
  )
}

export default FilterBar