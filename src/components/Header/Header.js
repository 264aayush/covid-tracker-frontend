import './Header.css'
import logo from './logo192.png';

let Header = (prop) => {
  return (
    <nav id="navbar">
      <img src={logo} id="app-logo" alt='app-logo'></img>
      <span className="brand" href="#">Covid Tracker</span>
    </nav>
  )
}


export default Header;