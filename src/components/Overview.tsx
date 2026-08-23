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
          description={Math.round(todoRate) + "% of all tasks"}
          format="number"
          variant="default"
        />
        <StatCard
          title="Total In Progress"
          total={totalInProgress}
          description={Math.round(inProgressRate) + "% of all tasks"}
          format="number"
          variant="default"
        />
        <StatCard
          title="Total Completed"
          total={totalCompleted}
          description={Math.round(completionRate) + "% of all tasks"}
          format="number"
          variant="default"
        />
        <StatCard
          title="Completion Rate"
          total={Math.round(completionRate)}
          description="Rate completed tasks"
          format="percent"
          variant="completion"
        />
        </div>
    </>
  )
}

export default Overview