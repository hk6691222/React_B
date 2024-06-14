import React from 'react'
import FrontPage from './FrontPage'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <div>
    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
    <a className="navbar-brand" to="/">Navbar</a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" to="#scrollspyHeading1">{props.aboutText}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#scrollspyHeading2">History</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Sports</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" to="/scrollspyHeading3">Badminton</a></li>
          <li><a className="dropdown-item" to="/scrollspyHeading4">Cricket</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" to="/scrollspyHeading5">Basketball</a></li>
          <li><a className="dropdown-item" to="/scrollspyHeading5">Cricket1</a></li>
          <li><a className="dropdown-item" to="/scrollspyHeading5">Football</a></li>
          <li><a className="dropdown-item" to="/scrollspyHeading5">Vollyball</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <FrontPage/>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore facilis quis perspiciatis in voluptatum nam facere eos vel, a ratione qui molestiae sint minima corrupti, totam libero itaque non animi consectetur tempora unde?</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae consequatur assumenda officiis, porro laboriosam odio, maxime qui quia tenetur nesciunt reprehenderit enim quas iste?</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio obcaecati excepturi ea hic totam ipsum neque consectetur. Nam, cumque.</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore dolor ipsa ad culpa consectetur?</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quasi.</p>
  </div>
  </div>
  )
}

export default Navbar

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
