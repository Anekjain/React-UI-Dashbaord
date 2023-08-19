import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src='logo.svg' alt='Logo'/>
        <span>React Dashboard</span>
      </div>
       <div className='icons'>
        <img src='/search.svg' alt=''/>
        <img src='/app.svg' alt=''/>
        <img src='/expand.svg' alt=''/>
      <div className="notification">
        <img src='/notifications.svg' />
        <span>1</span>
      </div>
      <div className="user">
        <img src='./app.svg'/>
        <span>Anek</span>
      <div>
        <img className= 'icons' src='./settings.svg'/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar