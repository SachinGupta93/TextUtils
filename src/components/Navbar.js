import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Navbar(props) {
  const getTextColor = () => {
    if (props.mode === 'dark') return 'white';
    if (props.mode === 'light') return 'black';
    return 'white'; // For colored modes
  }
  return (
    <nav className="navbar navbar-expand-lg" style={{
      backgroundColor: props.mode === 'dark' ? 'black' :
        props.mode === 'light' ? 'white' : "black",
      color: getTextColor(),
    }}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" style={{ color:getTextColor() }}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" style={{ color:getTextColor() }}>{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: getTextColor() }}>{props.about}</Link>
            </li>
          </ul>

          <div className="container d-flex justify-content-center align-items-center">
            <button type="button" style={{ cursor: 'pointer' }} className="btn btn-primary mx-4" onClick={() => props.togglemorecolors('primary')}></button>
            <button type="button" style={{ cursor: 'pointer' }} className="btn btn-secondary mx-4" onClick={() => props.togglemorecolors('secondary')}></button>
            <button type="button" style={{ cursor: 'pointer' }} className="btn btn-success mx-4" onClick={() => props.togglemorecolors('success')}></button>
            <button type="button" style={{ cursor: 'pointer' }} className="btn btn-danger mx-4" onClick={() => props.togglemorecolors('danger')}></button>
            <button type="button" style={{ cursor: 'pointer' }} className="btn btn-warning mx-4" onClick={() => props.togglemorecolors('warning')}></button>
            <button type="button" style={{ cursor: 'pointer' }} className="btn btn-info mx-4" onClick={() => props.togglemorecolors('info')}></button>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"   checked={props.mode === 'dark'}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: getTextColor() }}>{props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired,
  home: propTypes.string.isRequired,
  mode: propTypes.string.isRequired
}
export default Navbar
