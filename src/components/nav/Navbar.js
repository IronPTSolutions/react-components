import logo from '../../images/logo-ih.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Ironhack" width="40" height="40" className="d-inline-block align-center me-2" />
          React Components
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
