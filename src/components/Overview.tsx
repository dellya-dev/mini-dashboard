import StatCard from "./StatCard"

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
      <div>
        <StatCard
          title="Total Tasks"
          total={totalTasks}
          description="All tasks"
          format="number"
        />
        <StatCard
          title="Total Todo"
          total={totalTodo}
          description={todoRate.toFixed(2) + "% of all tasks"}
          format="number"
        />
         <StatCard
          title="Total In Progress"
          total={totalInProgress}
          description={inProgressRate.toFixed(2) + "% of all tasks"}
          format="number"
        />
         <StatCard
          title="Total Completed"
          total={totalCompleted}
          description={completionRate.toFixed(2) + "% of all tasks"}
          format="number"
        />
         <StatCard
          title="Completion Rate"
          total={completionRate}
          description="Rate completed tasks"
          format="percent"
        />
      </div>
    </>
  )
}

export default Overview