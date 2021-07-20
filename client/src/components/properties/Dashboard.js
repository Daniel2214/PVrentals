import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteFile } from "../../aws/s3";

const Dashboard = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/api/properties").then((res) => {
      setProperties(res.data);
    });
  }, []);

  const removeImages = async (id) => {
    properties.forEach((property) => {
      if (property._id === id) {
        for (let i = 0; i < property.images.length; i++) {
          deleteFile(property.images[i]);
        }
      }
    });
  };

  const onDelete = async (id) => {
    const token = await getAccessTokenSilently();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await removeImages(id);
    await axios.delete(`/api/properties/${id}`, config).then(() => {
      return window.location.reload();
    });
  };

  const deleteButton = (id) => (
    <button className="btn btn-danger delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );

  return (
    <Fragment>
      <h1 className="large text-primary">Properties</h1>
      <div className="properties">
        {properties.map((property) => (
          <div className="property bg-light" key={property._id}>
            <img
              src={`https://pvrentals.s3.us-east-2.amazonaws.com/${property.images[0]}`}
              alt=""
            />
            <div>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{`${property.status} for $${property.price} ${property.currency}`}</p>
              {property.status === "Rent" ? (
                <p>Per {property.period}</p>
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
              {property.description.map((description) => (
                <li className="text-primary">
                  <i className="fas fa-minus"></i> {description}
                </li>
              ))}
            </ul>
            <ul>
              <li className="text-primary">
                <i className="fas fa-phone"></i> 322-102-2204
              </li>
              {property.fbLink ? (
                <li className="text-primary">
                  <i className="fa fa-facebook"></i>{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={property.fbLink}
                  >
                    Facebook
                  </a>
                </li>
              ) : (
                <div></div>
              )}
              <li className="text-primary">
                <i className="fas fa-envelope"></i> {property.user}
              </li>
              {isAuthenticated ? deleteButton(property._id) : <div></div>}
            </ul>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Dashboard;
