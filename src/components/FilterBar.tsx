import type { Filter } from "../types/task"

type FilterBarProps = {
  setFilter: (filter: Filter) => void
}

function FilterBar({ setFilter }: FilterBarProps) {
  
  return(
    <>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("todo")}>Todo</button>
        <button onClick={() => setFilter("in-progress")}>In-Progress</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </>
  )
}

export default FilterBar