import logo from '../../assets/react.svg'
function Header() {
  return (
    <header style={{ backgroundColor: "#007bff", padding: "1rem", color: "white" }}>
      <div className='flex'>
        <div>
            <h1>React website</h1>
        </div>
        <div>
            <img src={logo} alt="Logo" className="rounded w-12 h-12 mr-4" />
        </div>
      </div>
      
      <nav>
        <a href="#home" style={{ color: "white", marginRight: "1rem" }}>Home</a>
        <a href="#diensten" style={{ color: "white", marginRight: "1rem" }}>Diensten</a>
        <a href="#contact" style={{ color: "white" }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header