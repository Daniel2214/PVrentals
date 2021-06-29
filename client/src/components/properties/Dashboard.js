import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/api/properties").then((res) => {
      setProperties(res.data);
    });
  }, []);

  const deleteButton = (
    <button className="btn btn-danger delete">Delete</button>
  );

  return (
    <Fragment>
      <h1 className="large text-primary">Properties</h1>
      <div className="properties">
        {properties.map((property) => (
          <div className="property bg-light" key={property._id}>
            <img
              src="https://tropicasa.com/images/photos/1609/B71-1609.jpg"
              alt=""
            />
            <div>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{`${property.status} for $${property.price} ${property.currency}`}</p>
              {property.status === "Rent" ? (
                <p>For {property.period}</p>
              ) : (
                <p></p>
              )}
              <Link
                to={`/property/${property._id}`}
                className="btn btn-primary viewMore"
              >
                View More
              </Link>
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
              {isAuthenticated ? deleteButton : <div></div>}
            </ul>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Dashboard;
