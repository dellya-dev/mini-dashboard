type StatCardProps = {
 title: string
 total: number
 description: string
 format: "number" | "percent"
}

function StatCard({ title, total, description, format }: StatCardProps) {

  return (
    <>
      <div>
        <div>
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
      </div>
    </>
  )
}

export default StatCard