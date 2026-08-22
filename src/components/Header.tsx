import '../App.css'

type HeaderProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (value: boolean) => void
}
function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {

  return (
    <>
      <div className="header">
        <div className='header-mobile-menu'>
          <button 
            className='mobile-menu-icon'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >☰
          </button>
        </div>
        <div>
          <h2>Good Today</h2>
          <h4>Let's make today productive</h4>
        </div>
      </div>
    </>
  )
}

export default Header