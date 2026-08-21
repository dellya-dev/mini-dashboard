import StatCard from "./StatCard"
import '../App.css'

type OverviewProps = {
  totalTasks: number
  totalTodo: number
  todoRate: number
  totalInProgress: number
  inProgressRate: number
  totalCompleted: number
  completionRate: number
}
function Overview({
  totalTasks,
  totalTodo,
  todoRate,
  totalInProgress,
  inProgressRate,
  totalCompleted,
  completionRate }: OverviewProps) {

  return (
    <>
      <div className="overview">
        <StatCard
          title="Total Tasks"
          total={totalTasks}
          description="All tasks"
          format="number"
          variant="default"
        />
        <StatCard
          title="Total Todo"
          total={totalTodo}
          description={Number.isInteger(todoRate)
            ? `${todoRate}` + "% of all tasks"
            : todoRate.toFixed(2)
            + "% of all tasks"}
          format="number"
          variant="default"
        />
        <StatCard
          title="Total In Progress"
          total={totalInProgress}
          description={Number.isInteger(inProgressRate)
            ? `${inProgressRate}` + "% of all tasks"
            : inProgressRate.toFixed(2)
            + "% of all tasks"}
          format="number"
          variant="default"
        />
        <StatCard
          title="Total Completed"
          total={totalCompleted}
          description={Number.isInteger(completionRate)
            ? `${completionRate}` + "% of all tasks"
            : completionRate.toFixed(2)
            + "% of all tasks"}
          format="number"
          variant="default"
        />
        <StatCard
          title="Completion Rate"
          total={completionRate}
          description="Rate completed tasks"
          format="percent"
          variant="completion"
        />
        </div>
    </>
  )
}

export default Overview