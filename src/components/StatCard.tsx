import '../App.css'

type StatCardProps = {
 title: string
 total: number
 description: string
 format: "number" | "percent"
 variant: "default" | "completion"
}

function StatCard({ title, total, description, format, variant }: StatCardProps) {

  return (
    <>
      <div className={`stat-card ${variant}`}>
          <h3>{title}</h3>
          <h2>
            {format === "number" && 
            <span>{total}</span>}
            {format === "percent" && 
            <span>
              {Number.isInteger(total)
                ? total
                : total.toFixed(2)
              }
              %
            </span>}
          </h2>
          <p>{description}</p>
        </div>
    </>
  )
}

export default StatCard