import React from 'react'
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">PV Real Estate</h1>
          <p className="lead">
            Look for the best properties for rent and sell in Puerto Vallarta
          </p>
          <div className="buttons">
            <Link to="/properties" className="btn btn-primary">Properties</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
