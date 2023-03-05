// impt
import PropTypes from 'prop-types'
// rfc --start
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const picker = () => {
    const change = document.querySelectorAll('input')[0].value;
    document.body.style.background = change;
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <div className='d-flex me-2'> 
            <input type="color" className="form-control form-control-color" id="exampleColorInput" defaultValue="#563d7c" onChange={ picker }  title="Choose your color" />
          </div>
          <div className="form-check form-switch d-flex">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
              onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// rfc --end

Navbar.propTypes =
{
  title: PropTypes.string.isRequired,
  about: PropTypes.string // pts
};

Navbar.defaultProps =
{
  title: 'Default title',
  about: 'Default about'
};