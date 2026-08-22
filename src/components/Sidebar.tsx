import '../App.css'

type SidebarProps = {
  isSidebarOpen: boolean
}
function Sidebar({ isSidebarOpen }: SidebarProps) {

  return (
    <>
      <nav  className="sidebar">
        <ul>
          <li><a href="">Dashboard</a></li>
          <li><a href="">Tasks</a></li>
          <li><a href="">Setting</a></li>
        </ul>
      </nav>
      {isSidebarOpen && 
        <nav  className="sidebar-mobile-menu">
        <ul>
          <li><a href="">Dashboard</a></li>
          <li><a href="">Tasks</a></li>
          <li><a href="">Setting</a></li>
        </ul>
      </nav>
      }
      
    </>
  )
}

export default Sidebar