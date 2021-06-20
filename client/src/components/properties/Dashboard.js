import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';


const Dashboard = () => {

  const properties = [1, 2, 3, 4];

  return (
    <Fragment>
      <h1 className="large text-primary">Properties</h1>
      <div className="properties">
        {properties.map(property => (
          <div className="property bg-light">
            <img
              src="https://tropicasa.com/images/photos/1609/B71-1609.jpg"
              alt=""
            />
            <div>
              <h2>House in El Tigre</h2>
              <p>El Tigre, Nuevo Vallarta</p>
              <p>Rent for 1600 dlls</p>
              <p>For 1 year</p>
              <Link to="/property" className="btn btn-primary viewMore">View More</Link>
            </div>

            <ul>
              <li className="text-primary">
                <i className="fas fa-minus"></i> 14 rooms
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> Private Pool
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> 3 parking spots
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> Bathroom in each bedroom
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> Security 24 hrs
              </li>
            </ul>
            <ul>
              <li className="text-primary">
                <i className="fas fa-phone"></i> 321313213
              </li>
              <li className="text-primary">
                <i className="fa fa-facebook"></i> Facebook link
              </li>
              <li className="text-primary">
                <i className="fas fa-envelope"></i> d@test.com
              </li>
              <button className="btn btn-danger delete">
                Delete
              </button>
            </ul>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Dashboard
